import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsComponentContainer from "./My_Posts_Module/MyPostsComponentContainer";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <div className={style.profileInfo}>
        <ProfileInfo />
      </div>
      <div className={style.myPosts}>
        <MyPostsComponentContainer state={props.state} />
      </div>
    </div>
  );
};

export default Profile;
