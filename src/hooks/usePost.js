import {useState, useEffect, useContext} from 'react';
import {URL} from '../API/const';
import {tokenContext} from '../context/tokenContext';

export const usePost = () => {
  const [posts, setPosts] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/best`, {
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
        const data = postData.data.children.map(item => item.data);
        setPosts(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);
  console.log(posts);
  return [posts];
};
