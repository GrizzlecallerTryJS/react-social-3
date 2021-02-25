import React from "react";
import style from "./Profile.module.css";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg"
          alt="wide_image"
        />
      </div>
      <div>{/* <p>Main Content</p> */}</div>
      <div className={style.avatar_and_info_block}>
        <div className={style.avatar_image}>
          <img
            src="https://p7.hiclipart.com/preview/7/618/505/avatar-icon-fashion-men-vector-avatar.jpg"
            alt="avatar_image"
          />
        </div>
        <div className={style.profile_info}>Ava + description</div>
      </div>
      <MyPostsComponent />
    </div>
  );
};

export default Profile;
