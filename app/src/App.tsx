import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { General } from "./components/General/General";

function App() {
  // ApiStore().then((booksData) => {
  //   console.log(booksData);
  // });
  return (
    <Provider store={store}>
      <div>
        <General />
      </div>
    </Provider>
  );
}

export default App;
