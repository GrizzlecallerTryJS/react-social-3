import "./index.css";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  zeroingMessage,
  subscribe,
} from "./redux/state";

let rendenTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          zeroingMessage={zeroingMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rendenTree(state);

subscribe(rendenTree);

export default rendenTree;
