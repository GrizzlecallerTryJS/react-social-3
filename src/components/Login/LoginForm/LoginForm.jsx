import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    props.setAuthLogin(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email"></label>
        <input
          placeholder="email"
          type="text"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        <div>
          <div>{errors.email?.type === "required" && "Email is required"}</div>
          <div>
            {errors.password?.type === "required" && "Password is required"}
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
