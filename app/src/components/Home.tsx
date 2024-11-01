import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const searchValue = useSelector((state) => state.myMarket.searchValue);
  console.log(searchValue);
  return <div>Home</div>;
};

export default Home;
