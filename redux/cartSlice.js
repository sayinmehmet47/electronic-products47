import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        ...action.payload,
        _id: action.payload._id + Math.random() * 10,
      });
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      (state.products = []), (state.quantity = 0), (state.total = 0);
    },
    removeSelected: (state, action) => {
      console.log(state);

      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { addProduct, reset, removeSelected } = cartSlice.actions;

export default cartSlice.reducer;
