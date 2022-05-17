import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPostDB = createAsyncThunk(
  'add/postDB',
  async (formData, thunkAPI) => {
    // console.log(formData)
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
    console.log(error)
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostDetailDB = createAsyncThunk(
  'get/postDetailDB',
  async (postId, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://a-fo-back.shop/post/detailRead?postId=${postId}`,
        postId
      );
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostDB = createAsyncThunk(
  'delete/postDB',
  async (postId, thunkAPI) => {
    console.log(postId);
    try {
      const res = await axios.delete(
        `https://a-fo-back.shop/post/delete?postId=${postId}`,
      )
      return {res, postId};
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const editPostDB = createAsyncThunk(
  'edit/postDB',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const res = await axios.patch(
        `https://a-fo-back.shop/post/update/${data}`, 
      )
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const boardSlice = createSlice({
  name: 'board',
  initialState: {},
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
        console.log(state.postList)
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
        // console.log(state.postDetail)
      })
      .addCase(getPostDetailDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log(state.error);
      })
      // -----게시물 삭제
      .addCase(deletePostDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePostDB.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.postList = state.postList.filter(list => list.postId !== action.payload.postId);
      })
      .addCase(deletePostDB.rejected, (state, action) => {
        state.loading = false;
      })
      // -----게시물 수정
      // .addCase(deletePostDB.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(deletePostDB.fulfilled, (state, action) => {
      //   state.loading = false;
      // })
      // .addCase(deletePostDB.rejected, (state, action) => {
      //   state.loading = false;
      // })
  },
});

export const { addPost, getPost, getPostDetail } = boardSlice.actions;

export default boardSlice;
