import React from 'react';
import style from './PreLoader.module.css';
import RingLoader from 'react-spinners/RingLoader';

export const PreLoader = props =>
  <RingLoader className={style.postLoader} color="#36d7b7" size={150} />;
