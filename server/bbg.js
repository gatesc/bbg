'use strict';

const axios = require('axios');
const xmlParser = require('xml2json');

var massageBoardGameInfo = function(bbgInfo) {
  let gameInfo={};

  if (!bbgInfo) {
    return gameInfo;
  }

  let g = bbgInfo;
  //console.log("================")
  //console.log(bbgInfo)
  //console.log("================")

  // get the game name
  if (!Array.isArray(g.name)) {
      let a=g.name;
      g.name=[];
      g.name.push(a);
  }
  for (let i=0; i<g.name.length; i++) {
    if (g.name[i].type === "primary") {
      gameInfo.name = g.name[i].value;
    }
  }

  gameInfo.id = g.id;
  gameInfo.description = g.description;
  gameInfo.image = {thumbnail: g.thumbnail, full: g.image}
  gameInfo.year = g.yearpublished.value;
  gameInfo.num_players = {min: g.minplayers.value, max: g.maxplayers.value};
  gameInfo.play_time = {min: g.minplaytime.value, max: g.maxplaytime.value};
  var category=[];
  var mechanic=[];
  var expansion=[];
  var designer =[];
  var artist=[];
  for (let i=0; i<g.link.length; i++) {
    let link=g.link[i];
    switch (link.type) {
      case "boardgamecategory":
        category.push(link.value);
        break;
      case "boardgamemechanic":
        mechanic.push(link.value);
        break;
      case "boardgameexpansion":
        expansion.push(link.value);
        break;
      case "boardgamedesigner":
        designer.push(link.value);
        break;
      case "boardgameartist":
        artist.push(link.value);
        break;
    }
  }
  gameInfo.designer = designer;
  gameInfo.artist = artist;
  gameInfo.expansions = expansion;
  gameInfo.mechanics = mechanic;
  gameInfo.categories = category;
  return gameInfo;
}

module.exports = {
  'getGameIds': async function(name) {
    let n=name
    let searchUrl = "https://www.boardgamegeek.com/xmlapi2/search?exact=1&type=boardgame&query="+n;
    console.log(searchUrl)
    var xmlInfo = await axios.get(searchUrl);
    var info = xmlParser.toJson(xmlInfo.data, {object: true, trim: true, sanitize: true});

    let ids=[];
    console.log("items length...", info.items.item.length);
    let items = info.items.item;  // weird bbg definition, to make it easier to access
    if (items) {
      if (Array.isArray(items)) {
        console.log("b1")
        for (let i=0; i<items.length; i++) {
          let currItem = items[i];
          if (currItem.type === "boardgame") {
            ids.push({name: currItem.name.value, id: currItem.id, year: currItem.yearpublished.value});
          }
        }
      }
      else {
        if (items.type === "boardgame") {
          ids.push({name: items.name.value, id: items.id, year: items.yearpublished.value})
        }
      }
    }
    else {
      ids = [];
    }
    console.log("ids... ", ids);
    return ids;
  },

  'getGameInfo': async function(name) {
//    let n=name
//    let searchUrl = "https://www.boardgamegeek.com/xmlapi2/search?exact=1&type=boardgame&query="+n;
//    console.log(searchUrl)
//    var xmlInfo = await axios.get(searchUrl);
////    var info = JSON.parse(xmlParser.toJson(xmlInfo.data));
//    var info = xmlParser.toJson(xmlInfo.data, {object: true, trim: true, sanitize: true});
//    console.log(JSON.stringify(info.items))

    let boardgames = await this.getGameIds(name);

    // bbg allows fetching multiple games by comma separting the ids. let's build that list
    // here and then make the call to the game info
    let idsAsStr="";
    for (let i=0; i<boardgames.length; i++) {
      if (i>0) {
        idsAsStr += ",";
      }
      idsAsStr += boardgames[i].id
    }

    let lookupUrl = "https://www.boardgamegeek.com/xmlapi2/thing?id="+idsAsStr;
    console.log(lookupUrl);
    let xmlInfo = await axios.get(lookupUrl);
    //console.log(typeof(xmlInfo.data))
    //info = JSON.parse(xmlParser.toJson(xmlInfo.data));
    let info = xmlParser.toJson(xmlInfo.data, {object: true, trim: true, sanitize: true})
    console.log(JSON.stringify(info));
//return info;
    // massage the results here... we want to combine the current boardgame info with the xmlInfo
    // that was just fetched in a more sane manner

    // first split the info into an array of game info items (bbg puts the array in a weird spot)
    let theItems=[];
    if (!info.items) {
      return undefined;
    }
    if (Array.isArray(info.items.item)) {
      for (let i=0; i<info.items.item.length; i++) {
        theItems.push(info.items.item[i]);
      }
    } else {
      theItems.push(info.items.item)
    }

    var theGamesInfo = [];
    for (let i=0; i<theItems.length; i++) {
      theGamesInfo.push(massageBoardGameInfo(theItems[i]));
    }
    return theGamesInfo;
  }

}
