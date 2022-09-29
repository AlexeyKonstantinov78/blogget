import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
  data: {},
  comments: {},
  error: '',
};

export const commentsDataSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsDataRequest: (state) => {
      state.status = 'loading';
      state.data = {};
      state.comments = {};
      state.error = '';
    },
    commentsDataRequestSuccess: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.comments = action.payload.comments;
      state.error = '';
    },
    commentsDataRequestError: (state, action) => {
      state.status = 'error';
      state.data = {};
      state.comments = {};
      state.error = action.payload.err;
    },
  },
});

export default commentsDataSlice.reducer;
