import React from "react";

const NewPostComponent = (props) => {
  let textElement = React.createRef();

  let addPostButtonAction = () => {
    props.addPost(props.newPostText.message);
    props.zeroingMessage("");
  };

  let tmp = () => {
    let text = textElement.current.value;
    props.inputForPosts(text);
  };

  return (
    <div>
      <div>New Post</div>
      <textarea
        ref={textElement}
        onChange={tmp}
        value={props.newPostText.message}
      />
      <button onClick={addPostButtonAction}>Add post</button>
    </div>
  );
};

export default NewPostComponent;
