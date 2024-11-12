import { useSelector } from "react-redux";
import { MyModal, LoginForm, RegistrationForm } from "../../../globalImports";
const Home = () => {
  const searchValue = useSelector((state) => state.myMarket.searchValue);
  console.log(searchValue);
  // return <div>{<MyModal />}</div>;
  // return <div>{<LoginForm />}</div>;
  // return <div>{<RegistrationForm />}</div>;
  return (
    <div>
      {/* <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ></div> */}
    </div>
  );
};
export default Home;
