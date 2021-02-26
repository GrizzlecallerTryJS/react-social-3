import React from "react";
import style from "./Profile.module.css";
import wideImage from "../../assets/images/wideImage.jpg";
import defaultAvatar from "../../assets/images/defaultAvatar.jpg";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src={wideImage} alt="wide_image" />
      </div>
      <div>{/* <p>Main Content</p> */}</div>
      <div className={style.avatar_and_info_block}>
        <div className={style.avatar_image}>
          <img src={defaultAvatar} alt="avatar_image" />
        </div>
        <div className={style.profile_info}>Ava + description</div>
      </div>
      <MyPostsComponent />
    </div>
  );
};

export default Profile;
