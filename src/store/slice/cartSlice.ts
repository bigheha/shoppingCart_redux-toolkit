import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { confirmPurchase } from "../globalActions";

export interface CartState {
  isOpen: boolean;
  itemsInCart: {
    [key: string]: {
      name: string;
      unitPrice: number;
      amount: number;
    };
  };
}

export type CartItemType = {
  name: string;
  unitPrice: number;
  amount?: number;
};

const initialState: CartState = {
  isOpen: false,
  itemsInCart: {},
};

const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addProduct: (state, action: PayloadAction<CartItemType>) => {
      const itemName = action.payload.name;
      if (action.payload.name in state.itemsInCart) {
        state.itemsInCart[`${itemName}`].amount += 1;
      } else {
        state.itemsInCart[`${itemName}`] = {
          name: action.payload.name,
          unitPrice: action.payload.unitPrice,
          amount: 1,
        };
      }
    },
    clearProducts: (state) => {
      for (const item in state.itemsInCart) {
        delete state.itemsInCart[item];
      }
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      state.itemsInCart[action.payload].amount += 1;
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      state.itemsInCart[action.payload].amount -= 1;
      if (state.itemsInCart[action.payload].amount === 0) {
        delete state.itemsInCart[action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(confirmPurchase, (state) => {
      state.itemsInCart = {};
    });
  },
});

export default cartSlice.reducer;

export const {
  toggleCart,
  addProduct,
  clearProducts,
  decreaseAmount,
  increaseAmount,
} = cartSlice.actions;
