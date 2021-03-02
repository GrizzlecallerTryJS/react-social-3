import React from "react";

const NewPostComponent = (props) => {
  let textElement = React.createRef();

  let addPostButtonAction = () => {
    props.dispatch(props.addPostAC());
  };

  let onPostChange = () => {
    let text = textElement.current.value;
    props.dispatch(props.onPostChangeAC(text));
  };

  return (
    <div>
      <div>New Post</div>
      <textarea
        ref={textElement}
        onChange={onPostChange}
        value={props.newPostText}
      />
      <button onClick={addPostButtonAction}>Add post</button>
    </div>
  );
};

export default NewPostComponent;
