import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    currentProduct: null,
    numberOfprodcts : 0
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    addNewProduct  : (state,action) =>{
        state.numberOfprodcts += 1 
    },
    decreseProduct  : (state,action) =>{
        if (state.numberOfprodcts > 0) { state.numberOfprodcts -=1}
    }
  },
});

export const { setCurrentProduct,addNewProduct,decreseProduct } = cartSlice.actions;

export default cartSlice.reducer;