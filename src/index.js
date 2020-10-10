import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/configure-store";
import Maincomponent from "./screen/Maincomponent";

const App = () => (
  <Provider store={store}>
    <Maincomponent />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));