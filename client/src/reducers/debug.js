import { DEBUG_MSG, DEBUG_WARN, DEBUG_ERROR } from "../actions/actionTypes.js";

const initState = {
  msg: 'STARTED',
  allmsgs: [],
  errors: [],
  warns: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case DEBUG_MSG:
      console.log("reducing DEBUG_MSG...");
      return {
        ...state,
        msg: action.payload
      };
    case DEBUG_WARN:
    console.log("reducing DEBUG_WARN...");
      return {
        ...state,
        msg: "DEBUG_WARN called"
      }
    case DEBUG_ERROR:
    console.log("reducing DEBUG_ERROR...");
      return {
        ...state,
        msg: "DEBUG_ERROR called"
      }
    default:
      return state;
  }
}
