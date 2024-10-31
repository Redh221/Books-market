import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooksByName: builder.query({
      query: (name) =>
        `volumes?q=${name}&key=AIzaSyCMJuD0M5F1ZMIDKg1eiYjVZ2EHp1cr6_k`,
    }),
  }),
});

export const { useGetBooksByNameQuery } = booksApi;

// export async function ApiStore() {
//   const data = await fetch(
//     "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCMJuD0M5F1ZMIDKg1eiYjVZ2EHp1cr6_k"
//   );
//   const result = await data.json();
//   return result;
// }
