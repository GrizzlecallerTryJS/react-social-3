import "./index.css";
import store from "./redux/react-store";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "./ContextProvider";

let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={state}>
          <App />
        </Provider>
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
