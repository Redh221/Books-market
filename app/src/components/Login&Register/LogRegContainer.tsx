import { useState } from "react";
import { LoginForm, RegistrationForm } from "../../../globalImports";

const LogRegContainer = () => {
  const [logReg, setLogReg] = useState("Register");

  const logRegHandler = () => {
    setLogReg(logReg === "Register" ? "Login" : "Register");
  };

  return (
    <div>
      {logReg === "Register" ? <RegistrationForm /> : <LoginForm />}
      <button onClick={logRegHandler}>
        {logReg === "Register" ? "Switch to Login" : "Switch to Register"}
      </button>
    </div>
  );
};

export default LogRegContainer;
