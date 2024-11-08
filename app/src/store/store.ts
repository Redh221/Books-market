import { configureStore } from "@reduxjs/toolkit";
import { booksApi, userApi, myMarket } from "../../globalImports";

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
