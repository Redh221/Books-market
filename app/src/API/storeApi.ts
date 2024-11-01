import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooksByName: builder.query({
      query: (
        { name, amount = 20, index = 0 } //max amount is 40, api hard cap
      ) =>
        `volumes?q=${name}&maxResults=${amount}&startIndex=${index}&key=AIzaSyDRJANAgfHpi3QDXxJfuI-378RzLZaU4b0`,
    }),
  }),
});

export const { useGetBooksByNameQuery } = booksApi;
