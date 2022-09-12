import {useState} from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {assignId} from '../../utils/generateRandomId';

const LIST = [
  {value: `Главная`},
  {value: `Просмотренные`},
  {value: `Сохраненные`},
  {value: `Мои посты`},
].map(assignId);

export const Main = props => {
  const [list, setList] = useState(LIST);

  return (
    <main className={style.main}>
      <Layout>
        <Tabs list={list} setList={setList}/>
        <List />
      </Layout>
    </main>
  );
};
