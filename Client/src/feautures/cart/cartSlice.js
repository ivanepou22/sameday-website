import { createSlice } from "@reduxjs/toolkit";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalItems = JSON.parse(localStorage.getItem("totalItems")) || 0;
let totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
let total = JSON.parse(localStorage.getItem("total")) || 0;

const initialState = {
  cart: cart,
  total: total,
  totalItems: totalItems,
  totalPrice: totalPrice,
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
      state.totalPrice = cart.map((item) => item.total).reduce((a, b) => a + b, 0);

      // persist cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("total", JSON.stringify(total));
      localStorage.setItem("totalItems", JSON.stringify(totalItems));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
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
      // totalPrice: return olnly the total price of the cart
      state.totalPrice = cart.map((item) => item.total).reduce((a, b) => a + b);
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("total", JSON.stringify(total));
      localStorage.setItem("totalItems", JSON.stringify(totalItems - 1));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.total));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    clearItemFromCart: (state, action) => {
      let { cart, total, totalItems } = state;
      const product = action.payload;
      // remove product from cart and recalculate total, totalItems and totalPrice
      const productIndex = cart.findIndex((item) => item.id === product.id);
      cart.splice(productIndex, 1);
      total -= product.price * product.quantity;
      totalItems -= product.quantity;
      state.cart = cart;
      state.total = total;
      state.totalItems = totalItems;
      state.totalPrice = cart.map((item) => item.total).reduce((a, b) => a + b, 0);
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("total", JSON.stringify(total));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    homeService: (state, action) => {
      // when user adds home service, add 5000 to total
      // otherwise do nothing
      let checked = action.payload;
      if (checked) {
        state.total += 5000;
        state.totalPrice = state.cart.map((item) => item.total).reduce((a, b) => a + b, 0) + 5000;
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      } else {
        state.total -= 5000;
        state.totalPrice = state.cart.map((item) => item.total).reduce((a, b) => a + b, 0);
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
      localStorage.setItem("total", JSON.stringify(state.total));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
    },
  },
});

export const cartSelector = (state) => state.cart;
export const { addToCart, removeFromCart, clearCart, clearItemFromCart, homeService } =
  cartSlice.actions;
export default cartSlice.reducer;
