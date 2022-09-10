import React from 'react';
import style from './Tabs.module.css';

// eslint-disable-next-line arrow-body-style
export const Tabs = props => {
  return (
    <ul className={style.list}>
      <li><a href="/">Главная</a></li>
      <li><a href="/">Просмотренные</a></li>
      <li><a href="/">Сохраненные</a></li>
      <li><a href="/">Мои посты</a></li>
    </ul>);
};
