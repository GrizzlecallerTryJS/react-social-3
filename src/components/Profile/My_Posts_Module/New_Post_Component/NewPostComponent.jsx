import React from "react";
import NewPostForm from "./NewPostForm";

const NewPostComponent = (props) => {
  let addPostButtonAction = (text) => {
    props.addPost(text);
  };

  return (
    <div>
      <div>New Post</div>

      <NewPostForm
        addPostButtonAction={addPostButtonAction}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export default NewPostComponent;
