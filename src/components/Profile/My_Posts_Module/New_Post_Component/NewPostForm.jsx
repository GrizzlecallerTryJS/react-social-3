import React from "react";
import { useForm } from "react-hook-form";

const NewPostForm = (props) => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    props.addPostButtonAction(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="newPost"></label>
        <textarea
          placeholder="type here"
          name="newPost"
          ref={register({ maxLength: 255 })}
        />
      </div>
      <div>
        {errors.newPost?.type === "maxLength" && "Max Length is 255 symbols"}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default NewPostForm;
