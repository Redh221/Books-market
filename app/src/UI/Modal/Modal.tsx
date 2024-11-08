import module from "./Modal.module.scss";
import { IconCloseButton, MyButton } from "../../../globalImports";

const MyModal = ({ children, setModal }) => {
  return (
    <div onClick={() => setModal(false)} className={module.wrapper}>
      <div
        className={module.container}
        onClick={(event) => event.stopPropagation()}
      >
        <MyButton
          preset="iconImg"
          settings={{ size: "small" }}
          onClick={() => setModal(false)}
        >
          <img src={IconCloseButton} alt="Close" />
        </MyButton>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
