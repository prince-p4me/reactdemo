import Types from "../types";
import languages from "../../dummy/languages";

export const getAllList = function (state = languages, action) {
  switch (action.type) {
    case Types.SET_ALL:
      return [...action.payload];
    default:
      return state;
  }
};

export const getSelectedList = function (state = [], action) {
  switch (action.type) {
    case Types.SET_SELECTED:
      return [...action.payload];
    default:
      return state;
  }
};