import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = props => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nikname1',
      ups: 77,
      date: '2020-02-24T00:45:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nikname2',
      ups: 21,
      date: '2022-01-24T00:45:00.000Z',
      id: '124',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nikname3',
      ups: 23,
      date: '2022-02-20T00:45:00.000Z',
      id: '125',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nikname4',
      ups: 25,
      date: '2022-02-21T00:45:00.000Z',
      id: '126',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}
    </ul>
  );
};
