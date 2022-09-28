import React from 'react';
import { useSelector } from 'react-redux';
import style from './EmptyMain.module.css';

export const EmptyMain = props => {
  const token = useSelector((state) => state.token.token);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Стартовая страница</h2>
      <h3 className={style.present}>Добро пожаловать!</h3>
      <p className={style.text}>
        {token ? 'Выберите категорию' : 'Авторизуйтесь'}
      </p>
    </div>
  );
};
