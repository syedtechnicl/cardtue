import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as CartItem[],
  reducers: {
    AddToCart: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
    RemoveToCart: (state, action: PayloadAction<number>) => {
      return state.filter((e) => e.id !== action.payload);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, RemoveToCart, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;


// git
