import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let { cart, total, totalItems } = state;
      const product = action.payload;
      // check if product already exists in cart and update quantity, price and total otherwise add new product
      const productIndex = cart.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
        cart[productIndex].total = cart[productIndex].quantity * cart[productIndex].price;
      } else {
        cart.push({ ...product, quantity: 1, total: product.price });
      }
      total += product.price;
      totalItems += 1;
      state.cart = cart;
      state.total = total;
      state.totalItems = totalItems;
    },
    removeFromCart: (state, action) => {
      let { cart, total, totalItems } = state;
      const product = action.payload;
      const productIndex = cart.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart[productIndex].quantity -= 1;
          cart[productIndex].total = cart[productIndex].quantity * cart[productIndex].price;
        } else {
          cart.splice(productIndex, 1);
        }
        total -= product.price;
      }
      state.cart = cart;
      state.total = total;
      state.totalItems = totalItems - 1;
    },
    clearCart: (state) => {
      return { cart: [], total: 0 };
    },
  },
});

export const cartSelector = (state) => state.cart;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
