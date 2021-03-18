import React from "react";

import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Messages from "./components/Navbar/Messages/Messages";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  const ProfileComponent = () => {
    return <ProfileContainer />;
  };

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
      <HeaderContainer />
      <Navbar />
      <Route path="/profile/:userID?" render={ProfileComponent} />
      <Route exact path="/messages" render={MessagesComponent} />
      <Route path="/news" render={NewsComponent} />
      <Route path="/music" render={MusicComponent} />
      <Route path="/settings" render={SettingsComponent} />
      <Route path="/users" render={UsersComponent} />
      <Route path="/login" render={Login} />
    </div>
  );
};

export default App;
