import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {},
  error: '',
  after: '',
  isLast: false,
  page: '',
  count: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    postsRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.children;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postsRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.children];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.count += 1;
    },
    postsRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.err;
    },
    changePage: (state, action) => {
      state.data = {};
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
      state.count = 0;
    },
  },
});

export default postsSlice.reducer;
