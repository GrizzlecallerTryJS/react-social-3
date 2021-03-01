import "./index.css";
import store from "./redux/state";
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
          addPost={store.addPost}
          updateNewPostText={store.updateNewPostText}
          zeroingMessage={store.zeroingMessage}
          addMessage={store.addMessage}
          updateNewMessageText={store.updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTree(store.getState());

store.subscribe(renderTree);

export default renderTree;
