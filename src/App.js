import React from "react";

import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import Messages from "./components/Navbar/Messages/Messages";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./assets/preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  ProfileComponent = (props) => {
    return <ProfileContainer />;
  };

  MessagesComponent = (props) => {
    return <Messages />;
  };

  NewsComponent = (props) => {
    return <News />;
  };

  MusicComponent = (props) => {
    return <Music />;
  };

  SettingsComponent = (props) => {
    return <Settings />;
  };

  UsersComponent = (props) => {
    return <UsersContainer />;
  };

  LoginComponent = (props) => {
    return <LoginContainer />;
  };

  render() {
    if (!this.props.initializeApp) {
      return <Preloader />;
    }

    return (
      <div className={style.app_wrapper}>
        <HeaderContainer />
        <Navbar />
        <Route path="/profile/:userID?" render={this.ProfileComponent} />
        <Route exact path="/messages" render={this.MessagesComponent} />
        <Route path="/news" render={this.NewsComponent} />
        <Route path="/music" render={this.MusicComponent} />
        <Route path="/settings" render={this.SettingsComponent} />
        <Route path="/users" render={this.UsersComponent} />
        <Route path="/login" render={this.LoginComponent} />
      </div>
    );
  }
}

//test comment

const mapStateToProps = (state) => {
  return {
    init: state.appReducer.initializeState,
  };
};

const acObject = {
  initializeApp,
};

export default compose(withRouter, connect(mapStateToProps, acObject))(App);
