import React from "react";
import TextField from "@mui/material/TextField";

const MyInput = ({ setter, ...props }) => {
  const change = (event) => setter(event.target.value);

  return <TextField {...props} onChange={change} />;
};

export default MyInput;
