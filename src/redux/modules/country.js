import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const countryMainDB = createAsyncThunk(
  'country/countryMainDB',
  async (thunkAPI) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `http://3.36.117.118/main/allCountry`,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const countrySlice = createSlice({
  name: 'country',
  initialState: {
    loading: false,
    land: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryMainDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(countryMainDB.fulfilled, (state, action) => {
        state.loading = false;
        state.land = action.payload.land;
      })
      .addCase(countryMainDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {} = countrySlice.actions;

export default countrySlice.reducer;
