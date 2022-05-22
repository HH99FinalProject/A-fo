import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCommentDB = createAsyncThunk(
  'get/commentDB',
  async (postId, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://a-fo-back.shop/comment/read?postId=${postId}`,
      );
      console.log(res.data)
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
    // console.log(data.token);
    try {
      const res = await axios.post(
        'http://a-fo-back.shop/comment/create',
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

export const deleteCommentDB = createAsyncThunk(
  'delete/commentDB',
  async (data, thunkAPI) => {
    console.log(data)
    try {
      const res = await axios.delete(
        `http://a-fo-back.shop/comment/delete?commentId=${data.commentId}&postId=${data.postId}`,
      );
      return {res, data};
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const editCommentDB = createAsyncThunk(
  'edit/commentMode',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const res = await axios.patch(
        `http://a-fo-back.shop/comment/update`, data,
      )
      console.log(res.data)
      return {res, data};
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

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
        state.commentList = action.payload.commentInfo;
      })
      .addCase(addCommentDB.rejected, (state, action) => {
        state.loading = false;
      })
      // ----- 댓글 삭제
      .addCase(deleteCommentDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteCommentDB.fulfilled, (state, action) => {
        state.loading = false;
        state.commentList = state.commentList.filter(list => list.commentId !== action.payload.data.commentId);
      })
      .addCase(deleteCommentDB.rejected, (state, action) => {
        state.loading = false;
      })
      // ----- 댓글 수정
      .addCase(editCommentDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editCommentDB.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.commentList[0].comment = action.payload.data.comment; 
      })
      .addCase(editCommentDB.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export default commentSlice;
