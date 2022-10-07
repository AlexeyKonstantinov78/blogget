import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../API/const';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, { getState }) => {
    let page = getState().posts.page;
    let after = getState().posts.after;

    if (newPage) {
      page = newPage;
      after = '';
    }

    const token = getState().token.token;
    const loading = getState().posts.loading;
    // const isLast = getState().posts.isLast;

    if (!token || !loading) return;
    console.log(after);
    return axios(`${URL}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({ data: { data: posts } }
      ) => {
        console.log();
        return { posts, page };
      })
      .catch((err) => {
        console.error(err);
        return { err: err.toString() };
      });
  },
);
