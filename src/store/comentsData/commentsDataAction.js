import axios from 'axios';
import { URL } from '../../API/const';
import { commentsDataSlice } from './commentsDataSlice';

export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(commentsDataSlice.actions.commentsDataRequest());

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

      dispatch(
        commentsDataSlice.actions.commentsDataRequestSuccess(
          { data, comments }));
    })
    .catch((err) => {
      console.error(err);
      dispatch(
        commentsDataSlice.actions.commentsDataRequestError(
          { err: err.toString() }
        ));
    });
};
