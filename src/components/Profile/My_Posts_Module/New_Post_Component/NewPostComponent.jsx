import React from "react";

const NewPostComponent = (props) => {
  let addPostButtonAction = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };

  return (
    <div>
      <div>New Post</div>
      <textarea onChange={onPostChange} value={props.newPostText} />
      <button onClick={addPostButtonAction}>Add post</button>
    </div>
  );
};

export default NewPostComponent;
