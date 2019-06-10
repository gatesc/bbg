'use strict';

const axios = require('axios');
const xmlParser = require('xml2json');

module.exports = {
  'getGameInfo': async function(name) {
    let n='Blood rage'
    let searchUrl = "https://www.boardgamegeek.com/xmlapi2/search?exact=1&type=boardgame&query="+n;
    console.log(searchUrl)
    var xmlInfo = await axios.get(searchUrl);
    var info = JSON.parse(xmlParser.toJson(xmlInfo.data));
    console.log(info.items)

    let lookupUrl = "https://www.boardgamegeek.com/xmlapi2/thing?id="+info.items.item.id;
    console.log(lookupUrl);
    xmlInfo = await axios.get(lookupUrl);
    console.log(typeof(xmlInfo.data))
    info = xmlParser.toJson(xmlInfo.data);
    console.log(info);
    return info;
  }

}
