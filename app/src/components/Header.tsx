import React from "react";
import MyButton from "../UI/Button/Button";
import style from "./Header.module.scss";
import Icon from "../assets/cart.png";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MyButton nav={"/"} settings={{ color: "brick" }}>
          Hom Se
        </MyButton>
        <MyButton nav={"/goods"}>Shope</MyButton>
        <MyButton
          href="https://fonts.google.com/specimen/Poppins"
          settings={{ type: "link", textShadow: "white" }}
        >
          Intsagramm
        </MyButton>
        <MyButton preset="iconImg">
          <img src={Icon} alt="Description of SVG" />
        </MyButton>

        <MyButton preset="iconText">
          <p>B</p>
        </MyButton>
      </div>
    </div>
  );
};

export default Header;
