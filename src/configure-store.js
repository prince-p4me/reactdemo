import { createStore } from "redux";
import { countReducer } from "./screen/reducer";

export const store = createStore(countReducer);
