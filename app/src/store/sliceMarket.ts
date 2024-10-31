import { createSlice } from "@reduxjs/toolkit";

const myMarket = createSlice({
  name: "my-market",
  initialState: { searchValue: "React" },
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearch } = myMarket.actions;
export default myMarket.reducer;
