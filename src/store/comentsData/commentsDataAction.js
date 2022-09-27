import axios from 'axios';
import { URL } from '../../API/const';

export const COMMENTS_DATA_REQUEST = 'COMMENTS_DATA_REQUEST';
export const COMMENTS_DATA_SUCCESS = 'COMMENTS_DATA_SUCCESS';
export const COMMENTS_DATA_ERROR = 'COMMENTS_DATA_ERROR';

export const commentsDataRequest = () => ({
  type: COMMENTS_DATA_REQUEST,
});

export const commentsDataRequestSuccess = (data, comments) => ({
  type: COMMENTS_DATA_SUCCESS,
  data,
  comments,
});

export const commentsDataRequestError = (err) => ({
  type: COMMENTS_DATA_ERROR,
  err,
});

export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(commentsDataRequest());

  axios(`${URL}/comments/${id}`, {
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

      dispatch(commentsDataRequestSuccess(data, comments));
    })
    .catch((err) => {
      console.error(err);
      dispatch(commentsDataRequestError(err.toString()));
    });
};
