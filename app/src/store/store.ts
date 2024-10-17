import { configureStore } from "@reduxjs/toolkit";
import myMarket from "./sliceMarket";

const store = configureStore({
  reducer: { myMarket },
});

export default store;
