
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  showNewCart : false
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleNewCart : (state)=>{
      state.showNewCart = !state.showNewCart
    }
  },
  
});

export const { toggleMenu,toggleNewCart } = navSlice.actions;
export default navSlice.reducer;