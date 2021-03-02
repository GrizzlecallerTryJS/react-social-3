import "./index.css";
import store, {
  addPostAC,
  onMessageChangeAC,
  onPostChangeAC,
  sendMessageAC,
} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          addPostAC={addPostAC.bind(store)}
          onPostChangeAC={onPostChangeAC.bind(store)}
          sendMessageAC={sendMessageAC.bind(store)}
          onMessageChangeAC={onMessageChangeAC.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTree(store.getState());

store.subscribe(renderTree);

export default renderTree;
