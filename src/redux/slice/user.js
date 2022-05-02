import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const commentSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      state.push("댓글입니다.");
      return state;
    }
  }
})

// const {actions, reducers} = commentSlice;
export const {addComment} = commentSlice.actions;

export default commentSlice.reducer;

// export default ;