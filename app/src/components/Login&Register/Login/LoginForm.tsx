import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MyInput,
  MyButton,
  useLoginUserProfileMutation,
} from "../../../../globalImports";
import module from "./LoginForm.module.scss";
// import { useLoginUserProfileMutation } from "../../../API/loginApi";

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");
  const [loginAPI, { isLoading, isError, isSuccess }] =
    useLoginUserProfileMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      let token = await loginAPI(data).unwrap();
      console.log(token);
      token = JSON.stringify(token);
      localStorage.setItem("user", token);
    } catch (error) {
      setError("email", {
        type: "server",
      });
      setLoginError(error.data);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={module.container}>
        <MyInput
          label="Email"
          // variant="outlined"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
          error={!!errors["email"]}
          helperText={errors["email"] ? errors["email"].message : ""}
        />

        <MyInput
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
        />
        {isError ? <div>{loginError}</div> : null}
        <MyButton form settings={{ size: "large" }}>
          Login
        </MyButton>
      </div>
    </form>
  );
};

export default LoginForm;
