import axios from 'axios';
import { URL } from '../../API/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POST_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  data: data.children,
  after: data.after,
});

export const postsRequestError = (err) => ({
  type: POST_REQUEST_ERROR,
  err,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(postsRequest());

  axios(`${URL}/best?limit=10`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      dispatch(postsRequestSuccess(data.data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(postsRequestError(err.toString()));
    });
};
