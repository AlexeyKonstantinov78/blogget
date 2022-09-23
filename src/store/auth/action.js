import axios from 'axios';
import { deleteToken } from '../../store/tokenReducer';
import { URL } from '../../API/const';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});
export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});
export const authRequestError = (err) => ({
  type: AUTH_REQUEST_ERROR,
  err,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(authRequest());

  axios(`${URL}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { name, icon_img: iconImg } }) => {
      const img = iconImg.replace(/\?.*$/, '');
      const data = { name, img };
      dispatch(authRequestSuccess(data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(deleteToken(token));
      dispatch(authRequestError(err.toString()));
    });
};
