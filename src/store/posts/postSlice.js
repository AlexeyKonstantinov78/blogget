import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';

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
  reducers: {},
  extraReducers: {
    [postsRequestAsync.pending.type]: (state, action) => {
      state.loading = true;
      state.error = '';
      if (action.meta.arg !== state.page && action.meta.arg !== undefined) {
        state.data = {};
        state.count = 0;
      }
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';

      if (state.page === action.payload.page) {
        state.count += 1;
      }

      if (state.page !== action.payload.page) {
        state.data = action.payload.posts.children;
      } else {
        state.data = [...state.data, ...action.payload.posts.children];
      }

      state.after = action.payload.posts.after;
      state.page = action.payload.page;
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.err;
    },
  },
});

export default postsSlice.reducer;
