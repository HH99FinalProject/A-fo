import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const targetSub1DB = createAsyncThunk(
  'target/targetSub1DB',
  async (purpose, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://13.125.244.244/sub1/filtering/target?purpose=${purpose}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const targetSub2DB = createAsyncThunk(
  'target/targetSub2DB',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://13.125.244.244/sub2/filtering/country?countryName1=${data.countryName1}&countryName2=${data.countryName2}&countryName3=${data.countryName3}&targetName=${data.targetName}`
      );
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
    vTarget: null,
    onePickTargetName: null,
    targetBottomSheet: [],
    list: null,
    purpose: null,
    land: [],
    countryList: [],
    error: null,
  },

  reducers: {
    // -----Target version 선택
    setVTargetReducer: (state, action) => {
      state.vTarget = action.payload;
    },
    resetVTargetReducer: (state, action) => {
      state.vTarget = null;
    },
    // -----

    // -----Sub1에서 목적 1개 선택
    setOnePickTargetNameReducer: (state, action) => {
      state.onePickTargetName = action.payload;
    },
    // -----

    // -----Sub2에서 나라 최대 4개 선택
    setTargetBottomSheetReducer: (state, action) => {
      // state.targetBottomSheet.push(action.payload);
      state.list = action.payload;
      state.targetBottomSheet.push(state.list);
    },
    resetTargetBottomSheetReducer: (state, action) => {
      state.targetBottomSheet.filter((v) => v !== action.payload.countryName);
    },
    // -----
  },

  extraReducers: (builder) => {
    builder
      // -----Sub1에서 목적 1개 선택
      .addCase(targetSub1DB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(targetSub1DB.fulfilled, (state, action) => {
        state.loading = false;
        state.purpose = action.payload;
      })
      .addCase(targetSub1DB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // -----

      // -----Sub2에서 나라 최대 4개 선택
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
    // -----
  },
});

export const {
  setVTargetReducer,
  resetVTargetReducer,
  setOnePickTargetNameReducer,
  setTargetBottomSheetReducer,
  resetTargetBottomSheetReducer,
} = targetSlice.actions;

export default targetSlice;
