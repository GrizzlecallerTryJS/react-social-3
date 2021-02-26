import React from "react";

import style from "./App.module.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import MessagesComponent from "./components/Navbar/Messages/MessagesComponent";
import NewsComponent from "./components/Navbar/News/NewsComponent";
import MusicComponent from "./components/Navbar/Music/MusicComponent";
import SettingsComponent from "./components/Navbar/Settings/SettingsComponent";

const App = () => {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />

      {/*<div className={style.dialog_style}>
        <DialogsComponent />
      </div>*/}
      <Route path="/profile" component={Profile} />
      <Route path="/messages" component={MessagesComponent} />
      <Route path="/news" component={NewsComponent} />
      <Route path="/music" component={MusicComponent} />
      <Route path="/settings" component={SettingsComponent} />
    </div>
  );
};

export default App;
