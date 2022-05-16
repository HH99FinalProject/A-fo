import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPostDB = createAsyncThunk(
  'add/postDB',
  async (formData, thunkAPI) => {
    console.log(formData)
    try {
      const res = await axios.post(
        `https://a-fo-back.shop/post/create`,
        formData.formData,
        {
          headers: {
            Authorization: formData.token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostDB = createAsyncThunk('get/postDB', async (thunkAPI) => {
  try {
    const res = await axios.get(`https://a-fo-back.shop/post/totalRead`);
    return res.data.postList;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostDetailDB = createAsyncThunk(
  'get/postDetailDB',
  async (postId, { history }, thunkAPI) => {
    // console.log(postId)
    try {
      const res = await axios.get(
        `https://a-fo-back.shop/post/detailRead?postId=${postId}`,
        postId
      );
      // console.log(res.data.postList[0])
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    postList: [],
    postDetail: {},
    postId: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // -----게시물 등록
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
      // -----전체게시물 불러오기
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
      // -----세부게시물 불러오기
      .addCase(getPostDetailDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostDetailDB.fulfilled, (state, action) => {
        state.loading = false;
        state.postDetail = action.payload.data.postList[0];
      })
      .addCase(getPostDetailDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log(state.error);
      });
  },
});

export const { addPost, getPost, getPostDetail } = boardSlice.actions;

export default boardSlice;
