// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProducts: [],
  orderData: {}, // Add this line
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
  },
});

export const { addProduct, setOrderData } = productsSlice.actions;

export default productsSlice.reducer;
