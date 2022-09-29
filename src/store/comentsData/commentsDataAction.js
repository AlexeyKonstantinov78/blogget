import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../API/const';

export const commentsDataRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState }) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({ data: postData }) => {
        const data = postData
          .map((item) => item.data.children)[0]
          .map((item) => item.data)[0];
        const comments = postData
          .map((item) => item.data.children)[1]
          .map((item) => item.data);

        return { data, comments };
      })
      .catch((err) => {
        console.error(err);
        return { err: err.toString() };
      });
  },
);
