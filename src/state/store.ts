import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import balanceReducer from "./slice/balanceSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    balance: balanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
