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
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
