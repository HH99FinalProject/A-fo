import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPostDB = createAsyncThunk(
  'add/postDB',
  async (formData, thunkAPI) => {
    // console.log(formData)
    try {
      const res = await axios.post(
        `https://a-fo-back.shop/post/create`,
        formData.formData,
        {
          headers: {
            Authorization: formData.token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTotalReadDB = createAsyncThunk(
  'get/postDB', async (data, thunkAPI) => {
  try {
    const res = await axios.get(`https://a-fo-back.shop/post/totalRead`);
    return res.data.postList;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostSearchDB = createAsyncThunk(
  'get/postDB', async (data, thunkAPI) => {
    console.log(data)
  try {
    const res = await axios.get(`https://a-fo-back.shop/post/postSearch?searchWord=${data.keyWord}&continent=${data.selectContinent}&target=${data.selectPurpose}`);
    return res.data.postList;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error);
  }
});

export const getPostDetailDB = createAsyncThunk(
  'get/postDetailDB',
  async (postId, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://a-fo-back.shop/post/detailRead?postId=${postId}`,
        postId
      );
      console.log(res)
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostDB = createAsyncThunk(
  'delete/postDB',
  async (postId, thunkAPI) => {
    console.log(postId);
    try {
      const res = await axios.delete(
        `https://a-fo-back.shop/post/delete?postId=${postId}`,
      )
      return {res, postId};
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getPostRawDataDB = createAsyncThunk(
  'get/postRawDataDB',
  async (postId, thunkAPI) => {
    console.log(postId);
    try {
      const res = await axios.get(
        `https://a-fo-back.shop/post/updateRawData?postId=${postId}`,
      )
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)


export const editPostDB = createAsyncThunk(
  'edit/postDB',
  async (formData, thunkAPI) => {
    console.log(formData);
    try {
      const res = await axios.patch(
        `https://a-fo-back.shop/post/update`, formData.formData, 
        {
          headers: {
            Authorization: formData.token,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const boardSlice = createSlice({
  name: 'board',
  initialState: {},
  reducers: {
    // rawData 초기화 시켜주기 why? 수정할때 데이터가 한박자 늦음
    initialRawData (state, action) {
      state.rawData = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // -----게시물 등록
      .addCase(addPostDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPostDB.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addPostDB.rejected, (state, action) => {
        state.loading = false;
      })

      // -----전체게시물 불러오기
      .addCase(getTotalReadDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTotalReadDB.fulfilled, (state, action) => {
        state.postList = action.payload;
        console.log(state.postList)
        state.loading = false;
      })
      .addCase(getTotalReadDB.rejected, (state, action) => {
        state.loading = false;
      })

      // -----게시물 검색하기
      // .addCase(getPostSearchDB.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(getPostSearchDB.fulfilled, (state, action) => {
      //   state.loading = false;
      // })
      // .addCase(getPostSearchDB.rejected, (state, action) => {
      //   state.loading = false;
      // })
      
      // -----세부게시물 불러오기
      .addCase(getPostDetailDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostDetailDB.fulfilled, (state, action) => {
        state.loading = false;
        state.postDetail = action.payload.data.postList;
        // console.log(state.postDetail)
      })
      .addCase(getPostDetailDB.rejected, (state, action) => {
        state.loading = false;
      })

      // -----게시물 삭제
      .addCase(deletePostDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePostDB.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.postList = state.postList.filter(list => list.postId !== action.payload.postId);
      })
      .addCase(deletePostDB.rejected, (state, action) => {
        state.loading = false;
      })

      // -----게시물 수정모드 진입시에 받는 원본글 데이터
      .addCase(getPostRawDataDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostRawDataDB.fulfilled, (state, action) => {
        state.loading = false;
        state.rawData = action.payload.data.postList;
      })
      .addCase(getPostRawDataDB.rejected, (state, action) => {
        state.loading = false;
      })

      // -----게시물 수정완료
      .addCase(editPostDB.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editPostDB.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(editPostDB.rejected, (state, action) => {
        state.loading = false;
      })
  },
});

export const { initialRawData } = boardSlice.actions;

export default boardSlice;
