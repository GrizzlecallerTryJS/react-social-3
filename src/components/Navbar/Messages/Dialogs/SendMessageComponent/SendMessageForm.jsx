import React from "react";
import { useForm } from "react-hook-form";

const SendMessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
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
          ref={register}
        ></textarea>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default SendMessageForm;
