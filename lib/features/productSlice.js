import { createSlice, current } from "@reduxjs/toolkit";

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
    editProduct: (state, action) => {
      state.status = "loading";
      const { updatedProduct, _id } = action.payload;
      state.products = state.products.map((data) =>
        data._id === _id ? { ...data, ...updatedProduct } : data
      );
      localStorage.setItem("product_list", JSON.stringify(state.products));
      state.status = "success";
    },
    deleteProduct: (state, action) => {
      state.status = "loading";
      const updatedProductList = state.products.filter(
        (data) => data._id !== action.payload
      );
      state.products = updatedProductList;
      localStorage.setItem("product_list", JSON.stringify(updatedProductList));
      state.status = "success";
    },
    fetchProducts: (state) => {
      state.status = "loading";
      const products_list = localStorage.getItem("product_list");
      if (products_list) {
        state.products = JSON.parse(products_list);
      } else {
        state.products = [];
      }
      state.status = "success";
    },
  },
});

export const { fetchProducts, addProduct, deleteProduct, editProduct } =
  productSlice.actions;
