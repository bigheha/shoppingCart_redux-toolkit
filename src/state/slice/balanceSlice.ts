import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: { currency: 100 },
  reducers: {
    increaseBalance: (state, action) => {
      state.currency += action.payload;
    },
    decreaseBalance: (state, action) => {
      state.currency -= action.payload;
    },
  },
});

export default balanceSlice.reducer;
export const { increaseBalance, decreaseBalance } = balanceSlice.actions;
