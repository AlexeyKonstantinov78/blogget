import React, {useContext} from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import {tokenContext} from '../../context/tokenContext';

export const Header = () => {
  const ctx = useContext(tokenContext);
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text='Главная' />
          <Search />
          <Auth {...ctx} />
        </div>
      </Layout>
    </header>
  );
};
