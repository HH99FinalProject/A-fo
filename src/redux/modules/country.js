import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 선택한 버전과 dispatch해주는 페이지의 이름으로 명칭.

export const countryMainDB = createAsyncThunk(
  'country/countryMainDB',
  async (thunkAPI) => {
    try {
      const res = await axios.get('http://a-fo-back.shop/main/allCountry');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const countrySub2DB = createAsyncThunk(
  'country/countrySub2DB',
  async (countryName, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://a-fo-back.shop/sub1/filtering/country?countryName=${countryName}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const CountrySub1DB = createAsyncThunk(
  'target/CountrySub1DB',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://a-fo-back.shop/sub2/filtering/target?targetName1=${data.targetName1}&targetName2=${data.targetName2}&targetName3=${data.targetName3}&targetName4=${data.targetName4}&countryName=${data.countryName}`
      );
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
    vCountry: null,
    onePickCountryName: null,
    countryName: null,
    land: [],
    countryList: [],
    error: null,
  },
  reducers: {
    // -----Country version 선택
    setVCountryReducer: (state, action) => {
      state.vCountry = action.payload;
    },
    resetVCountryReducer: (state, action) => {
      state.vCountry = null;
    },
    // -----

    // -----Sub2에서 나라 1개 선택
    setOnePickCountryNameReducer: (state, action) => {
      state.onePickCountryName = action.payload;
    },
    // -----
  },
  extraReducers: (builder) => {
    builder
      // ----Main에서 클릭시 나라 목록 보여주는 리듀서
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
      })
      // -----

      // -----Sub2에서 선택한 나라의 목적카드 보여주는 리듀서
      .addCase(countrySub2DB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(countrySub2DB.fulfilled, (state, action) => {
        state.loading = false;
        state.land = action.payload.land;
      })
      .addCase(countrySub2DB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      // -----

      // -----Sub2에서 나라 최대 4개 선택
      .addCase(CountrySub1DB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(CountrySub1DB.fulfilled, (state, action) => {
        state.loading = false;
        state.countryList = action.payload.countryList;
      })
      .addCase(CountrySub1DB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    // -----
  },
});

export const {
  setVCountryReducer,
  resetVCountryReducer,
  setOnePickCountryNameReducer,
} = countrySlice.actions;

export default countrySlice;
