import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import notfoto from './img/notphoto.jpg';
import Content from './Content';
import Rating from './Rating';
import Time from './Time';
import ButtonDelete from './ButtonDelete';

export const Post = ({postData}) => {
  const {thumbnail, title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <img
        className={style.img}
        src={
          (thumbnail === 'self' ||
            thumbnail === undefined ||
            thumbnail === '' ||
            thumbnail === 'default') ? notfoto : thumbnail
        }
        alt={title} />
      <Content props={{title, author}}/>
      <Rating ups={ups} />
      <Time date={date} />
      <ButtonDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
