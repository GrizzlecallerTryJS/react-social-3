import React from "react";
import style from "./Profile.module.css";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <div className={style.profileInfo}>
        <ProfileInfo />
      </div>
      <div className={style.myPosts}>
        <MyPostsComponent
          posts={props.posts}
          dispatch={props.dispatch}
          addPostAC={props.addPostAC}
          onPostChangeAC={props.onPostChangeAC}
        />
      </div>
    </div>
  );
};

export default Profile;
