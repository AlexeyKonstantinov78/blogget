import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { EmptyMain } from './EmptyMain/EmptyMain';

export const Main = (props) => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route index element={<EmptyMain />} />
        <Route path='/:auth' element={<EmptyMain />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
      </Routes>
    </Layout>
  </main>
);
