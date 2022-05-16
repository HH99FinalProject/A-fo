import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCommentDB = createAsyncThunk(
  'add/commentDB',
  async (commentData, thunkAPI) => {
    console.log(commentData);
    try {
      const res = await axios.post(
        'https://a-fo-back.shop/comment/create',
        commentData.commentData,
        {
          headers: {
            Authorization : commentData.token,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(res.data);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: { postComments: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // -----댓글 등록
      .addCase(addCommentDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addCommentDB.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addCommentDB.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default commentSlice;
