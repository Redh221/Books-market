import { configureStore } from "@reduxjs/toolkit";
import myMarket from "./sliceMarket";
import { booksApi } from "../API/storeApi";
import { userApi } from "../API/loginApi";

const store = configureStore({
  reducer: {
    myMarket,
    [booksApi.reducerPath]: booksApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(booksApi.middleware)
      .concat(userApi.middleware),
});

export default store;
