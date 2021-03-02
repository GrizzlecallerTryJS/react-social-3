import React from "react";

const NewPostComponent = (props) => {
  let addPostButtonAction = () => {
    props.dispatch(props.addPostAC());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(props.onPostChangeAC(text));
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
