// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    currentImage: null,
  },
  reducers: {
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

export const { setCurrentImage } = productSlice.actions;
export default productSlice.reducer;
