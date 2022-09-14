import {useState, useEffect} from 'react';
import {URL} from '../API/const';

export const useAuth = (state, token) => {
  const [auth, setAuth] = useState(state);

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
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  return [auth, setAuth];
};
