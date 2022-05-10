import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const countryMainDB = createAsyncThunk(
  'country/countryMainDB',
  async (thunkAPI) => {
    try {
      const res = await axios.get('http://3.36.117.118/main/allCountry');
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
        `http://3.36.117.118/sub1/filtering/country?countryName=${countryName}`
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
    land: [],
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
