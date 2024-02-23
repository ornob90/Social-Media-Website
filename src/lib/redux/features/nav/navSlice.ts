import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  menuOpen: boolean;
} = {
  menuOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    changeMenuState: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { changeMenuState } = navSlice.actions;

export default navSlice.reducer;
