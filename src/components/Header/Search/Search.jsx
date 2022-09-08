import React from 'react';
import style from './Search.module.css';
import search from './img/search.svg';

// eslint-disable-next-line arrow-body-style
export const Search = props => {
  return (
    <form className={style.form}>
      <input className={style.search} type="search"></input>
      <button className={style.button}>
        <img className={style.svg} src={search} alt="Поиск" />
      </button>
    </form>
  );
};
