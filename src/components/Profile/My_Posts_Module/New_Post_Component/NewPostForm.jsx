import React from "react";
import { useForm } from "react-hook-form";

const NewPostForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    props.addPostButtonAction(data);
    console.log(data);
    reset();
  };

  const maxLength255 = 255;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="newPost"></label>
        <textarea
          placeholder="type here"
          {...register("newPost", { required: true, maxLength: 255 })}
        />
      </div>
      <div>
        {errors.newPost?.type === "maxLength" &&
          `Max Length is ${maxLength255} symbols`}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default NewPostForm;
