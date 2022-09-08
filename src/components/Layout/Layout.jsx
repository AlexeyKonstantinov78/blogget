import React from 'react';
import style from './Layout.module.css';

// eslint-disable-next-line arrow-body-style, react/prop-types
export const Layout = ({children}) => {
  return <div className={style.container}>{children}</div>;
};
