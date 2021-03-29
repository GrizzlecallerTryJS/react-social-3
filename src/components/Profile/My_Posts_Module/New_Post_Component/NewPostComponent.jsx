import React from "react";
import NewPostForm from "./NewPostForm";

const NewPostComponent = (props) => {
  let addPostButtonAction = (text) => {
    props.addPost(text);
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };

  return (
    <div>
      <div>New Post</div>
      {/*<textarea onChange={onPostChange} value={props.newPostText} />
      <button onClick={addPostButtonAction}>Add post</button>*/}

      <NewPostForm
        addPostButtonAction={addPostButtonAction}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export default NewPostComponent;
