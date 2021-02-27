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

const App = (props) => {
  const ProfileComponent = () => {
    return <Profile posts={props.state.profilePage.posts} />;
  };

  const MessagesComponent = () => {
    return (
      <Messages
        message={props.state.messagesPage.messages}
        users={props.state.messagesPage.users}
      />
    );
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

  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />

      <Route path="/profile" component={ProfileComponent} />
      <Route exact path="/messages" component={MessagesComponent} />
      <Route path="/news" component={NewsComponent} />
      <Route path="/music" component={MusicComponent} />
      <Route path="/settings" component={SettingsComponent} />
    </div>
  );
};

export default App;
