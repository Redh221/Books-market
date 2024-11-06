import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("user")).accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    fetchUserProfile: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }), // пример запроса с использованием токена
    }),
  }),
});
export const { useRegisterMutation, useLazyFetchUserProfileQuery } = userApi;
