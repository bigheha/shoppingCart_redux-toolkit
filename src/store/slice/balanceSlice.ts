import { createSlice } from "@reduxjs/toolkit";
import { confirmPurchase } from "../globalActions";
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
  extraReducers: (builder) => {
    builder.addCase(confirmPurchase, (state, action) => {
      state.currency -= action.payload;
    });
  },
});

export default balanceSlice.reducer;
export const { increaseBalance, decreaseBalance } = balanceSlice.actions;
