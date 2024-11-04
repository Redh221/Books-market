import React from "react";
import TextField from "@mui/material/TextField";

const MyInput = React.forwardRef(({ setter, ...props }, ref) => {
  const change = (event) => {
    if (setter) {
      setter(event.target.value);
    }
  };

  return <TextField {...props} onChange={change} ref={ref} />;
});

export default MyInput;
