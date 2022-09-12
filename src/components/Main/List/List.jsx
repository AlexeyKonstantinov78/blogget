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
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nikname2',
      ups: 21,
      date: '2022-01-24T00:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nikname3',
      ups: 23,
      date: '2022-02-20T00:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nikname4',
      ups: 25,
      date: '2022-02-21T00:45:00.000Z',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (
        <Post key={index} postData={postData}/>
      ))}
      {
        [
          <Post key='0' postData={postsData[0]}/>,
          <Post key='1' postData={postsData[1]}/>,
          <Post key='2' postData={postsData[2]}/>,
          <Post key='3' postData={postsData[3]}/>,
        ]
      }
    </ul>
  );
};
