import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cart, total } = state;
      const { product } = action.payload;
      const newCart = [...cart, product];
      const newTotal = total + product.price;
      return { cart: newCart, total: newTotal };
    },
    removeFromCart: (state, action) => {
      const { cart, total } = state;
      const { product } = action.payload;
      const newCart = cart.filter((item) => item.id !== product.id);
      const newTotal = total - product.price;
      return { cart: newCart, total: newTotal };
    },
    clearCart: (state) => {
      return { cart: [], total: 0 };
    },
  },
});

export const cartSelector = (state) => state.cart;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
