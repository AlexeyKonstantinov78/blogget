import { createSlice } from '@reduxjs/toolkit';
import { commentsDataRequestAsync } from './commentsDataAction';

const initialState = {
  status: '',
  data: {},
  comments: {},
  error: '',
};

export const commentsDataSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsDataRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.data = {};
      state.comments = {};
      state.error = '';
    },
    [commentsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.comments = action.payload.comments;
      state.error = '';
    },
    [commentsDataRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.data = {};
      state.comments = {};
      state.error = action.payload.err;
    },
  },
});

export default commentsDataSlice.reducer;
