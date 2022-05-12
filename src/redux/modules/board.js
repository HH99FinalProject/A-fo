import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const PostDB = (formData, token) => {
  return async function (dispatch, { history }) {
    console.log(formData);
    axios({
      method: "post",
      url: `http://13.125.244.244/post/create`,
      data: {
        headers: {
          Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
  }
}
// createAsyncThunk(
//   'board/PostsDB',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         `http://13.125.244.244/post/create`, formData
//       );
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// )

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

export default boardSlice;
