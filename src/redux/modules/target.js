import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTargetInfo = createAsyncThunk(
  'main/targetInfo',
  async (targetName, countryName1, countryName2, countryName3, dispatch) => {
    console.log(targetName, countryName1, countryName2, countryName3);
    const data = await axios
      .get(
        `http://3.36.117.118/filtering/sub2/country?countryName1=${countryName1}&countryName2=${countryName2}&countryName3=${countryName3}&targetName=${targetName}`
      )
      .then((res) => {
        console.log(res);
        dispatch(setInfo(res.data));
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
    return data;
  }
);

export const targetSlice = createSlice({
  name: 'target',
  initialState: { countryList: [] },
  reducers: {
    setInfo: (state, action) => {
      console.log(action.payload);
      const countryList = action.payload.countryList;
      state.countryList = countryList;
    },
  },
  extraReducers: {
    [getTargetInfo.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.countryList = action.payload;
    },
  },
});

export const { setInfo } = targetSlice.actions;

export default targetSlice.reducer;
