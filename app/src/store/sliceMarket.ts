import { createSlice } from "@reduxjs/toolkit";

const myMarket = createSlice({
  name: "my-market",
  initialState: { giga: "vova" },
  reducers: {},
});

export const {} = myMarket.actions;
export default myMarket.reducer;
