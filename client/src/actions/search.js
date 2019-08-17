import axios from 'axios';
import { SEARCH_STRING, SEARCH_RESULTS } from './actionTypes.js';


export const getSearchStr = text => dispatch => {
  console.log("Inside actions/search... search called");

  return dispatch({
    type: SEARCH_STRING,
    payload: text
  })
};

async function fetchGameInfo(searchStr) {
  let url = 'http://penguin.linux.test:3001/getGameInfo?name=' + searchStr;
  console.log('url... ', url);

  try {
    let results = await axios.get(url);
    console.log('inside fetchGameInfo, got... ', results);
    return results.data.data;
  }
  catch (e) {
    console.error("Error... ", e);
    return "";
  }
}


export const getGamesInfo = text => async dispatch => {
  console.log("Inside actions/search... search called");

  let results = await fetchGameInfo(text);
  console.log(results);
  return dispatch({
    type: SEARCH_RESULTS,
    payload: results
  })
};
