import React from 'react';
import style from './PostLoader.module.css';
import RingLoader from 'react-spinners/RingLoader';

export const PostLoader = props =>
  <RingLoader className={style.postLoader} color="#36d7b7" size={200} />;
