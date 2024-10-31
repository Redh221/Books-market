import { configureStore } from "@reduxjs/toolkit";
import myMarket from "./sliceMarket";
import { booksApi } from "../API/storeApi";

const store = configureStore({
  reducer: { myMarket, [booksApi.reducerPath]: booksApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
