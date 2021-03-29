import React from "react";
import { useForm } from "react-hook-form";

const NewPostForm = (props) => {
  const defaultValues = {
    input: "",
  };

  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const onSubmit = (data) => {
    return props.addPostButtonAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="newPost"></label>
        <input
          placeholder="type here"
          type="text"
          name="newPost"
          ref={register}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default NewPostForm;
