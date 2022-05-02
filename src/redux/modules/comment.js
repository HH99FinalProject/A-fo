import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: { comment: [] },
  reducers: {
    addComment: (state, action) => {
      // state.push("댓글입니다.");
      state.comment.push(action.payload);
      // action.payload
      return state;
    },
  },
});

// const {actions, reducers} = commentSlice;
export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;

// export default ;
