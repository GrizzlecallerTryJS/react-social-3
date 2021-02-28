import React from "react";

const NewPostComponent = (props) => {
  debugger;
  let textElement = React.createRef();

  let addPostButtonAction = () => {
    let text = textElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <div>New Post</div>
      <textarea ref={textElement} />
      <button onClick={addPostButtonAction}>Add post</button>
    </div>
  );
};

export default NewPostComponent;
