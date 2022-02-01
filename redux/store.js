import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export function makeStore() {
  return configureStore({
    reducer: { counter: cartSlice },
  });
}

const store = makeStore();

export default store;
