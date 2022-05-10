import { createSlice } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: { scroll: false },
  reducers: {
    addScroll: (state, action) => {
      state.scroll = action.payload;
      console.log(state)
      return state;
    },
  },
});

export const { addScroll } = scrollSlice.actions;

export default scrollSlice.reducer;
