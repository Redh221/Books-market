import style from "./Header.module.scss";
import { Search, MyButton, IconCart } from "../../../globalImports";

const Header = (props) => {
  return (
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
      <Search />

      <MyButton preset="iconImg">
        <img src={IconCart} alt="Description of SVG" />
      </MyButton>

      <MyButton preset="iconText">
        <p>B</p>
      </MyButton>
      <MyButton onClick={() => props.setModal(true)}>Registration</MyButton>
    </div>
  );
};

export default Header;
