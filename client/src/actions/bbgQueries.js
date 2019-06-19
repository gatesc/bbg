'use strict'

import axios from 'axios';

modules.exports = function(QueryIt) {

  QueryIt.getGameInfo = await function(name) {
    let theGames=[];

    url='http://penguin.linux.test:3001/getGameInfo?name='+name;
    try {
      theGames = await axios.get(url);
    }
    catch (err) {
      console.log("<getGameInfo> Error... ", err);
      theGames=[];
    }
    finally {
      return theGames;
    }
  }

}
