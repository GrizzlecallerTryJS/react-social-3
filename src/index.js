import "./index.css";
import store from "./redux/react-store";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPostAC, onPostChangeAC } from "./redux/profilePageReducer";
import { onMessageChangeAC, sendMessageAC } from "./redux/messagePageReducer";

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

//store.subscribe(renderTree);

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

export default renderTree;
