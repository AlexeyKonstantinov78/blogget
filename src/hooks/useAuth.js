import { useState, useEffect } from 'react';
import { URL } from '../API/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store/tokenReducer';
import {
  authRequest,
  authRequestError,
  authRequestSuccess,
} from '../store/auth/action';
import axios from 'axios';

export const useAuth = () => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  useEffect(() => {
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
        setAuth({ name, img });
        dispatch(authRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken(token));
        dispatch(authRequestError(err.toString()));
      });
  }, [token]);

  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
