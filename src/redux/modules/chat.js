import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const chatSlice = createSlice({
  name: 'chat',
  initialState: {chatList: []},
  reducers: {},
  extraReducers: (builder) => {
    
  }
})

// export default chatSlice;