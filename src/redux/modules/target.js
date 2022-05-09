import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const targetSub2DB = createAsyncThunk(
  'target/targetSub2DB',
  async (data, thunkAPI) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `http://3.36.117.118/filtering/sub2/country?countryName1=${data.countryName1}&countryName2=${data.countryName2}&countryName3=${data.countryName3}&targetName=${data.targetName}`,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const targetSlice = createSlice({
  name: 'target',
  initialState: {
    loading: false,
    land: [],
    countryList: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(targetSub2DB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(targetSub2DB.fulfilled, (state, action) => {
        state.loading = false;
        state.countryList = action.payload.countryList;
      })
      .addCase(targetSub2DB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {} = targetSlice.actions;

export default targetSlice.reducer;
