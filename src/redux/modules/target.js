import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const getTargetInfo = (
  targetName,
  countryName1,
  countryName2,
  countryName3
) => {
  return function (dispatch) {
    axios({
      method: 'GET',
      url: `http://3.36.117.118/filtering/sub2/country?countryName1=${countryName1}&countryName2=${countryName2}&countryName3=${countryName3}&targetName=${targetName}`,
      data: {
        targetName: targetName,
        countryName1: countryName1,
        countryName2: countryName2,
        countryName3: countryName3,
      },
    })
      .then((res) => {
        dispatch(setInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const targetSlice = createSlice({
  name: 'target',
  initialState: { countryList: [] },
  reducers: {
    setInfo: (state, action) => {
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
