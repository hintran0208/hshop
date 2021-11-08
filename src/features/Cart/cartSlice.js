import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      return (state.showMiniCart = true);
    },

    hideMiniCart(state) {
      return (state.showMiniCart = false);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart } = actions;
export default reducer;
