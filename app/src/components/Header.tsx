import React from "react";
import MyButton from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MyButton>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            Hom Se
          </NavLink>
        </MyButton>{" "}
        <MyButton settings={{ glass: true }}>Hom Ve</MyButton>{" "}
        <MyButton>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/goods"
          >
            Shope
          </NavLink>
        </MyButton>
      </div>
    </div>
  );
};

export default Header;
