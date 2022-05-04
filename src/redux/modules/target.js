import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTargetInfo = (targetName, countryName1, countryName2, countryName3) => {
  return function (dispatch) {
    console.log(targetName, countryName1, countryName2, countryName3);
    axios({
      method: "GET",
      url: `http://3.36.117.118/filtering/sub2/country?countryName1=${countryName1}&countryName2=${countryName2}&countryName3=${countryName3}&targetName=${targetName}`,
      data: {
        targetName: targetName,
        countryName1: countryName1,
        countryName2: countryName2,
        countryName3: countryName3,
      }
    }).then((res) => {
      console.log(res);
      dispatch(setInfo(res.data));
    }).catch((err) => {
      console.log(err);
    })
  } 
}

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
