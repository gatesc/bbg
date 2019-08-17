import { combineReducers } from 'redux';
import debugReducer from './debug.js';
import searchReducer from './search.js';

export default combineReducers ({
  debug: debugReducer,
  search: searchReducer,
});
