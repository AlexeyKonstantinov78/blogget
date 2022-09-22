import { useState, useEffect } from 'react';
import { URL } from '../API/const';
import { useSelector } from 'react-redux';

export const usePost = () => {
  const [posts, setPosts] = useState({});
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/best?limit=10`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(`сервер статус ${response.status}`);
        }
        return response.json();
      })
      .then((postData) => {
        const data = postData.data.children.map((item) => item.data);
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [posts];
};
