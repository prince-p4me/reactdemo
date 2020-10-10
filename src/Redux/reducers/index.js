import counterReducer from "./list";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer;