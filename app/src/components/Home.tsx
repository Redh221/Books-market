import React from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "./Registration/RegistrationForm";

const Home = () => {
  const searchValue = useSelector((state) => state.myMarket.searchValue);
  console.log(searchValue);
  return <div>{<RegistrationForm />}</div>;
};

export default Home;
