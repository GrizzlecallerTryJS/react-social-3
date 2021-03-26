import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="login"></label>
        <input
          placeholder="login"
          type="text"
          name="login"
          ref={register({ required: true })}
        />
        {errors.login && <p>Login is required</p>}
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          placeholder="password"
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <p>Password is required</p>}
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
