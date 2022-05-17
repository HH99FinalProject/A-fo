import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCommentDB = createAsyncThunk(
  'get/commentDB',
  async (postId, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://a-fo-back.shop/comment/read?postId=${postId}`,
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const addCommentDB = createAsyncThunk(
  'add/commentDB',
  async (data, thunkAPI) => {
    // console.log(data);
    try {
      const res = await axios.post(
        'https://a-fo-back.shop/comment/create',
        data.commentData,
        {
          headers: {
            Authorization : data.token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {commentList: []},
  reducers: {},
  extraReducers: (builder) => {
    builder
      // -----댓글 조회
      .addCase(getCommentDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCommentDB.fulfilled, (state, action) => {
        state.loading = false;
        state.commentList = action.payload.commentList;
      })
      .addCase(getCommentDB.rejected, (state, action) => {
        state.loading = false;
      })
      // -----댓글 등록
      .addCase(addCommentDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addCommentDB.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload.commentInfo);
        state.commentList = action.payload.commentInfo;
      })
      .addCase(addCommentDB.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default commentSlice;
