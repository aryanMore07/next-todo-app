import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  products: [],
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.status = "loading";
      state.products = action.payload;
      localStorage.setItem("product_list", JSON.stringify(action.payload));
      state.status = "success";
    },
    fetchProducts: (state) => {
      state.status = "loading";
      const products_list = localStorage.getItem("product_list");
      console.log(products_list);
      if (products_list) {
        state.products = JSON.parse(products_list);
      } else {
        state.products = [];
      }
      state.status = "success";
    },
  },
});

export const { fetchProducts, addProduct } = productSlice.actions;
