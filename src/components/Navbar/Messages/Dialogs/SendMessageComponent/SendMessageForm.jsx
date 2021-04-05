import React from "react";
import { useForm } from "react-hook-form";

const SendMessageForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    props.sendMessage(data);
    reset();
  };

  const maxLength255 = 255;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sendMessageForm"></label>
        <textarea
          placeholder="type here"
          {...register("sendMessageForm", { required: true, maxLength: 255 })}
        />
        <div>
          {errors.sendMessageForm?.type === "required" &&
            "Your input is required"}
          {errors.sendMessageForm?.type === "maxLength" &&
            `Max length is ${maxLength255} symbols`}
        </div>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default SendMessageForm;
