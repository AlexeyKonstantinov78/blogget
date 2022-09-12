import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {assignId} from '../../utils/generateRandomId';

console.log(assignId());
const LIST = [
  {value: `Главная`},
  {value: `Просмотренные`},
  {value: `Сохраненные`},
  {value: `Мои посты`},
].map(assignId);

export const Main = props => (
  <main className={style.main}>
    <Layout>
      <Tabs list={LIST}/>
      <List />
    </Layout>
  </main>
);
