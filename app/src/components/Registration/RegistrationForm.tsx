import { Login } from "@mui/icons-material";
import React from "react";
import MyInput from "../../UI/Input/Input";
import MyButton from "../../UI/Button/Button";
import module from "./RegistrationForm.module.scss";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const password = watch("password");
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
            // type={
            //   name === "password" || name === "confirmPassword"
            //     ? "password"
            //     : "text"
            // }
            //enable it later
            {...register(name, {
              required:
                name === "lastName" ? null : `Поле ${label} обязательно`,
              pattern: validationRegex ? validationRegex : null,
              minLength: { value: 3, message: "Minimum amount is 3 symbols" },
              validate:
                name === "confirmPassword"
                  ? (value) => value === password || "Passwords do not match"
                  : undefined,
            })}
            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : "ООООООО"}
          />
        ))}

        <MyButton form>Send</MyButton>
      </div>
    </form>
  );
};

export default RegistrationForm;
