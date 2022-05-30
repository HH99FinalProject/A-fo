import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getChatListDB = createAsyncThunk(
  'get/chatListDB',
  async (authorId, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://a-fo-back.link/dm/list?authorId=${authorId}`,
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getDetailDB = createAsyncThunk(
  'get/recentDB',
  async (room, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://a-fo-back.link/dm/detail?room=${room}`,
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {chatList: []},
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getChatListDB.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getChatListDB.fulfilled, (state, action) => {
      state.loading = false;
      state.chatList = action.payload.DMList;
    })
    .addCase(getChatListDB.rejected, (state, action) => {
      state.loading = false;
    })
    .addCase(getDetailDB.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getDetailDB.fulfilled, (state, action) => {
      state.loading = false;
      state.DMList = action.payload.DMList;
    })
    .addCase(getDetailDB.rejected, (state, action) => {
      state.loading = false;
    })
  }
})

export default chatSlice;