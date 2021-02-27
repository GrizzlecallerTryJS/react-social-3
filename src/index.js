import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import defaultImage from "./assets/images/defaultImage.png";

const usersStore = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Yana" },
  { id: 3, name: "Marina" },
  { id: 4, name: "Sasha" },
];

const messagesStore = [
  { id: 1, message: "Lorem ipsum dolor sit amet, consectetur." },
  {
    id: 2,
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  { id: 3, message: "Lorem ipsum dolor sit." },
  { id: 4, message: "Lorem ipsum dolor sit amet." },
];

const postsStore = [
  { id: 1, message: "BEEP", image: defaultImage },
  { id: 2, message: "BOOP", image: defaultImage },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App users={usersStore} messages={messagesStore} posts={postsStore} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
