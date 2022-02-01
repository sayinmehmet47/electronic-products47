import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state) => {
      // state.value += 1;
    },
    reset: (state) => {
      // state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { addProduct, reset } = cartSlice.actions;

export default cartSlice.reducer;
