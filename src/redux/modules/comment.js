import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCommentDB = createAsyncThunk(
  'add/commentDB',
  async (commentData, thunkAPI) => {
    try {
      const res = await axios.post(
        'https://13.125.244.244/comment/create', commentData
      )
      console.log(res)
      return res;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
)

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
      })
  }
});


export default commentSlice;
