import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPostDB = createAsyncThunk(
  'add/postDB',
  async(formData, thunkAPI) => {
    try {
      console.log(formData);
      const res = await axios.post(
        `http://13.125.244.244/post/create`, formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getPostDB = createAsyncThunk(
  'get/postDB',
  async(thunkAPI) => {
    try {
      const res = await axios.get(
        `http://13.125.244.244/post/totalRead`
      );
      return res.data.postList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getPostDetailDB = createAsyncThunk(
  'get/postDetailDB',
  async(postId, {history}, thunkAPI) => {
    console.log(postId)
    try {
      const res = await axios.get(
        `http://13.125.244.244/post/detailRead?postId=${postId}`, postId
      );
      console.log(...res.data.postList);
      return res.data.postList;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const boardSlice = createSlice({
  name: 'board',
  initialState: { 
    postList: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // 게시물 등록
      .addCase(addPostDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPostDB.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addPostDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // 전체게시물 불러오기
      .addCase(getPostDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostDB.fulfilled, (state, action) => {
        state.postList = action.payload;
        state.loading = false;
      })
      .addCase(getPostDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // 세부게시물 불러오기
      .addCase(getPostDetailDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostDetailDB.fulfilled, (state, action) => {
        state.loading = false;
        state.postList.filter((v, i) => {
          console.log(v.postId, ...action.payload)
          // return v.postId === action.payload.postId;
        })
      })
      .addCase(getPostDetailDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log(state.error)
      })
  }
  
});


export const { addPost, getPost, getPostDetail } = boardSlice.actions;

export default boardSlice;