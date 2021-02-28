import React from "react";
import style from "./MyPostsComponent.module.css";
import NewPostComponent from "./New_Post_Component/NewPostComponent";
import OldPostsComponent from "./Old_Posts_component/OldPostsComponent";

const MyPostsComponent = (props) => {
  return (
    <div className={style.post_area_block}>
      <div>My Posts</div>
      <NewPostComponent addPost={props.addPost} />
      <div>
        <OldPostsComponent posts={props.posts} />
      </div>
    </div>
  );
};

export default MyPostsComponent;
