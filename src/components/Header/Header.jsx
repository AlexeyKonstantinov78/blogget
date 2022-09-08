import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';

// eslint-disable-next-line arrow-body-style
export const Header = props => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <h1>заголовок</h1>
          <Search />
          <Auth auth='Maks'/>
        </div>
      </Layout>
    </header>
  );
};
