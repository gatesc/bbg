import { SEARCH_STRING, SEARCH_RESULTS } from "../actions/actionTypes.js";

const initState = {
  searchStr: '',
  searchResults: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case SEARCH_STRING:
      console.log("reducing SEARCH...");
      return {
        ...state,
        searchStr: action.payload
      };
    case SEARCH_RESULTS:
      console.log("reducing GAME_SEARCH...");
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
}
