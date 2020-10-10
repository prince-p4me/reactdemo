import { getAllList, getSelectedList } from "./list";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  list: getAllList,
  selected: getSelectedList
})

export default rootReducer;