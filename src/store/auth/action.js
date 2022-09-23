export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';

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
