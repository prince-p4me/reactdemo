import { createStore } from "redux";
// import { countReducer } from "./reducers/reducer";
import rootReducer from "./reducers/index";

export const store = createStore(rootReducer);