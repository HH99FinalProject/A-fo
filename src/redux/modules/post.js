import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: { post: [] },
  reducers: {
    addPost: (state, action) => {
      console.log(action.payload);
      state.post.push(action.payload);
      return state;
    },
  },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
