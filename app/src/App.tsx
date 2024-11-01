import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { General } from "./components/General/General";

function App() {
  return (
    <Provider store={store}>
      <div>
        <General />
      </div>
    </Provider>
  );
}

export default App;
