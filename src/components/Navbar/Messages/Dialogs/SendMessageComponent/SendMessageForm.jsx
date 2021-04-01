import React from "react";
import { useForm } from "react-hook-form";

const SendMessageForm = (props) => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    props.sendMessage(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sendMessageForm"></label>
        <textarea
          placeholder="type here"
          name="sendMessageForm"
          ref={register({ required: true, minLength: 10 })}
        />
        <div>
          {errors.sendMessageForm?.type === "required" &&
            "Your input is required"}
          {errors.sendMessageForm?.type === "minLength" &&
            "Min length is minLength symbols"}
        </div>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default SendMessageForm;
