import React from "react";
import style from "./MyPostsComponent.module.css";
import NewPostComponent from "./New_Post_Component/NewPostComponent";
import OldPostsComponent from "./Old_Posts_component/OldPostsComponent";

const MyPostsComponent = (props) => {
    debugger
  return (
    <div className={style.post_area_block}>
      <div>My Posts</div>
      <NewPostComponent
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        onPostChange={props.onPostChange}
      />
      <div>
        <OldPostsComponent posts={props.state.posts} />
      </div>
    </div>
  );
};

export default MyPostsComponent;
