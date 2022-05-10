import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: { comment: [] },
  reducers: {
    addComment: (state, action) => {
      state.comment.push(action.payload);
      return state;
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice;
