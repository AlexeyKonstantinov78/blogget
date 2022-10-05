import axios from 'axios';
import { URL } from '../../API/const';
import { postsSlice } from './postSlice';

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;

  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage({ page: page.toString() }));
  }

  const token = getState().token.token;
  const after = getState().posts.after;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;

  if (!token || loading || isLast) return;
  dispatch(postsSlice.actions.postsRequest());

  axios(`${URL}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      if (after) {
        dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
      } else {
        dispatch(postsSlice.actions.postsRequestSuccess(data.data));
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch(postsSlice.actions.postsRequestError({ err: err.toString() }));
    });
};
