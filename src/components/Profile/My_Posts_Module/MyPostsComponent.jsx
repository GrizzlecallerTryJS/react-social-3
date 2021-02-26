import React from "react";
import style from "./MyPostsComponent.module.css";
import NewPostComponent from "./New_Post_Component/NewPostComponent";
import OldPostsComponent from "./Old_Posts_component/OldPostsComponent";

const MyPostsComponent = () => {
  return (
    <div className={style.post_area_block}>
      <div>My Posts</div>
      <NewPostComponent />
      <div>
        <OldPostsComponent />
      </div>
    </div>
  );
};

export default MyPostsComponent;
