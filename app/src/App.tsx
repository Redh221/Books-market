import { Provider, useSelector } from "react-redux";
import { ApiStore } from "./API/storeApi";
import store from "./store/store";
import { General } from "./components/General";

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
