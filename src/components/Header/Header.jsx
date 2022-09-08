import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

// eslint-disable-next-line arrow-body-style
export const Header = props => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text='Главная' />
          <Search />
          <Auth auth='' />
        </div>
      </Layout>
    </header>
  );
};
