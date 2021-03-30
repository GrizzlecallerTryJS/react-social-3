import React from "react";
import { useForm } from "react-hook-form";

const NewPostForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    props.addPostButtonAction(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="newPost"></label>
        <textarea placeholder="type here" name="newPost" ref={register} />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default NewPostForm;
