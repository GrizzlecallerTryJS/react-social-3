import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, inputForPosts, zeroingMessage } from "./redux/state";

let render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          inputForPosts={inputForPosts}
          zeroingMessage={zeroingMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
export default render;
