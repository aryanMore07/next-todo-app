import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/productSlice";

const rootReducer = combineSlices(productSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
