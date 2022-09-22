import { useState, useEffect } from 'react';
import { URL } from '../API/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store/tokenReducer';

export const useAuth = () => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          console.log(response.status);
          throw new Error(`сервер статус ${response.status}`);
        }
        return response.json();
      })
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken(token));
      });
  }, [token]);

  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
