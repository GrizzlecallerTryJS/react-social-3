import "./index.css";
import store from "./redux/react-store";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTree(store);

store.subscribe(() => {
  //let state = store.getState();
  renderTree(store);
});

export default renderTree;
