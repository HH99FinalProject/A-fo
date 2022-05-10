import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'post',
  initialState: { post: [] },
  reducers: {
    addPost: (state, action) => {
      console.log(action.payload);
      state.post.push(action.payload);
      return state;
    },
    getPost: (state, action) => {
      // state.post.push(action.payload);
      // return state.post;
    },
    getPostDetail: (state, action) => {
      // 클릭한 게시물의 id에 해당하는 게시물 가져오기
    }
  },
});


export const { addPost, getPost, getPostDetail } = boardSlice.actions;

export default boardSlice.reducer;
