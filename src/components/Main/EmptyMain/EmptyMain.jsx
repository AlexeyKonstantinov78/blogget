import React from 'react';
import style from './EmptyMain.module.css';

// eslint-disable-next-line arrow-body-style
export const EmptyMain = props => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Стартовая страница</h2>
      <h3 className={style.present}>Добро пожаловать!</h3>
      <p className={style.text}>Выберите категорию</p>
    </div>
  );
};
