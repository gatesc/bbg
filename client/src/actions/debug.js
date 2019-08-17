import {DEBUG_MSG, DEBUG_WARN, DEBUG_ERROR} from './actionTypes.js';

export const debug = (text) => dispatch => {
  console.log("Inside actions/Debug... debug called");
  dispatch ({
    type: DEBUG_MSG,
    payload:  '(D) ' + text
  })
};

export const debugWarn = (text) => dispatch => {
  console.log("Inside actions/Debug... debug warning called");
  dispatch ({
    type: DEBUG_WARN,
    payload:  '(W) ' + text
  })
};

export const debugError = (text) => dispatch => {
  console.log("Inside actions/Debug... debug error called");
  dispatch ({
    type: DEBUG_ERROR,
    payload:  '(E) ' + text
  })
};
