import React from "react";

import style from "./App.module.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Messages from "./components/Navbar/Messages/Messages";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import UsersContainer from "./components/Navbar/Users/UsersContainer";

const App = (props) => {
  /*  const ProfileComponent = () => {
    return <Profile state={props.state} />;
  };*/

  const ProfileComponent = () => {
    return <Profile />;
  };

  /*const MessagesComponent = () => {
    return <Messages state={props.state} />;
  };*/

  const MessagesComponent = () => {
    return <Messages />;
  };

  const NewsComponent = (props) => {
    return <News />;
  };

  const MusicComponent = (props) => {
    return <Music />;
  };

  const SettingsComponent = (props) => {
    return <Settings />;
  };

  const UsersComponent = (props) => {
    return <UsersContainer />;
  };

  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />

      <Route path="/profile" render={ProfileComponent} />
      <Route exact path="/messages" render={MessagesComponent} />
      <Route path="/news" render={NewsComponent} />
      <Route path="/music" render={MusicComponent} />
      <Route path="/settings" render={SettingsComponent} />
      <Route path="/users" render={UsersComponent} />
    </div>
  );
};

export default App;
