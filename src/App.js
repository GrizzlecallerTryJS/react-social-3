import React from 'react';

import style from './App.module.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
