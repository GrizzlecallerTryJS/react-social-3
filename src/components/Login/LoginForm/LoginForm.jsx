import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  debugger;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    await props.setAuthLogin(data).then(() => {
      if (props.serverError.length > 0) {
        authError();
      }
    });

    reset();
    console.log(errors.serverError.message);
  };

  const authError = () => {
    setError("serverError", { type: "manual", message: props.serverError });
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
