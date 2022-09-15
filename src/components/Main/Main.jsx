import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {PostContextProvider} from '../../context/postContext';

export const Main = props => (
  <main className={style.main}>
    <Layout>
      <PostContextProvider>
        <Tabs />
        <List />
      </PostContextProvider>
    </Layout>
  </main>
);
