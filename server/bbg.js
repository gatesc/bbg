'use strict';

const axios = require('axios');
const xmlParser = require('xml2json');

var massageBoardGameInfo = function(bbgInfo) {
  let gameInfo={};

  if (!bbgInfo) {
    return gameInfo;
  }

  let g = bbgInfo.item;
  console.log("================")
  console.log(bbgInfo)
  console.log("================")
  gameInfo.id = g.id;
  gameInfo.image = {thumbnail: g.thumbnail, image: g.image}
  for (let i=0; i<g.name.length; i++) {
    if (g.name[i].type === "primary") {
      gameInfo.name = g.name[i].value;
    }
  }
  gameInfo.description = g.description;
  gameInfo.year = g.yearpublished.value;
  gameInfo.num_players = {min: g.minplayers, max: g.maxplayers};
  gameInfo.play_time = {min: g.minplaytime, max: g.maxplaytime};
  var category="";
  var mechanic="";
  var expansion="";
  var designer ="";
  var artist="";
  for (let i=0; i<g.link.length; i++) {
    let link=g.link[i];
    switch (link.type) {
      case "boardgamecategory":
        if (category.length>0) {
          category += ", ";
        }
        category += link.value;
        break;
      case "boardgamemechanic":
        if (mechanic.length>0) {
          mechanic += ", ";
        }
        mechanic += link.value;
        break;
      case "boardgameexpansion":
        if (expansion.length>0) {
          expansion += ", "
        }
        expansion += link.value;
        break;
      case "boardgamedesigner":
        if (designer.length>0) {
          designer += ", "
        }
        designer += link.value;
        break;
      case "boardgameartist":
        if (artist.length>0) {
          artist += ", ";
        }
        artist += link.value;
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

    // massage the results here... we want to combine the current boardgame info with the xmlInfo
    // that was just fetched in a more sane manner
    let gameInfo = massageBoardGameInfo(info.items);

    return gameInfo;
  }

}
