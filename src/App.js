import React from 'react';
import './App.css';

import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt='logo' />
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className='content'>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg'
            alt='wide_image'
          />
        </div>
        <div>{/* <p>Main Content</p> */}</div>
        <div className='avatar_and_info_block'>
          <div className='avatar_image'>
            <img
              src='https://p7.hiclipart.com/preview/7/618/505/avatar-icon-fashion-men-vector-avatar.jpg'
              alt='avatar_image'
            />
          </div>
          <div className='profile_info'>Ava + description</div>
        </div>
        <div className='post_area_block'>
          <div>My Posts</div>
          <div>New Post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
            <div>Post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
