import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const LoginDB = createAsyncThunk(
  'login',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://13.125.244.244/oauth/google/callback`,{
          headers: {
            Authorization: token,
            "Content-Type": "application/x-www-form-urlencoded"
          } 
        } 
        
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState: {login: []},
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(LoginDB.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(LoginDB.fulfilled, (state, action) => {
      state.loading = false;
      state.purpose = action.payload;
    })
    .addCase(LoginDB.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    })
  }
})