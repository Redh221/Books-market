import { Login } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import MyInput from "../../UI/Input/Input";
import MyButton from "../../UI/Button/Button";
import module from "./RegistrationForm.module.scss";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useRegisterMutation } from "../../API/loginApi";

const RegistrationForm = () => {
  const [registerAPI, { isLoading, isError, isSuccess }] =
    useRegisterMutation();

  const [errorReg, setErrorReg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (e) => {
    delete e.confirmPassword;
    try {
      let token = await registerAPI(e).unwrap();
      console.log(token);
      token = JSON.stringify(token);
      console.log(token);
      localStorage.setItem("user", token);
    } catch (error) {
      setError("email", {
        type: "server",
      });
      setErrorReg(error.data);
    }
  };
  const fields = [
    {
      name: "firstName",
      label: "Name",
      validationRegex: {
        value: /^[A-ZА-ЯЁ][a-zа-яё]+$/,
        message: "Start from upper case, only letters",
      },
    },
    {
      name: "lastName",
      label: "Last Name",
      validationRegex: {
        value: /^[A-ZА-ЯЁ][a-zа-яё]+$/,
        message: "Start from upper case, only letters",
      },
    },
    {
      name: "email",
      label: "Email Address",
      validationRegex: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Введите корректный email",
      },
    },
    { name: "password", label: "Password" },
    { name: "confirmPassword", label: "Confirm Password" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={module.container}>
        {fields.map(({ name, label, validationRegex }) => (
          <MyInput
            key={name}
            label={label}
            variant="outlined"
            autoComplete={
              name === "password" || name === "confirmPassword"
                ? "new-password"
                : "off"
            }
            type={
              name === "password" || name === "confirmPassword"
                ? "password"
                : "text"
            }
            //enable it later
            {...register(name, {
              required:
                name === "lastName" ? null : `Поле ${label} обязательно`,
              pattern: validationRegex ? validationRegex : null,
              minLength: { value: 3, message: "Minimum amount is 3 symbols" },
              validate:
                name === "confirmPassword"
                  ? (value) =>
                      value === watch("password") || "Passwords do not match"
                  : undefined,
            })}
            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : ""}
          />
        ))}
        {isError ? <div className={module.error}>{errorReg}</div> : null}

        <MyButton form settings={{ size: "large" }}>
          Register
        </MyButton>
      </div>
    </form>
  );
};

export default RegistrationForm;
