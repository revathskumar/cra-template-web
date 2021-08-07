import { combineReducers } from "redux";
import { createReducer } from "redux-blackbox";

const rootReducer = combineReducers({
  home: createReducer({}),
});
export default rootReducer;
