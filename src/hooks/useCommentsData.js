import {useState, useEffect, useContext} from 'react';
import {URL} from '../API/const';
import {tokenContext} from '../context/tokenContext';
import PropTypes from 'prop-types';

export const useCommentsData = (id) => {
  const [post, setPost] = useState({});
  const [commentsData, setCommentsData] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/comments/${id}?limit=2&`, {
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
        const data = postData.map(
          item => item.data.children)[0].map(item => item.data)[0];
        const comments =
          postData.map(item => item.data.children)[1]
            .map(item => item.data);

        setPost(data);
        setCommentsData(comments);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [post, commentsData];
};

useCommentsData.propTypes = {
  id: PropTypes.string,
};
