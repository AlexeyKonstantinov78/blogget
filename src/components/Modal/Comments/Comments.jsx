import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import formatDate from '../../../utils/formatDate';

export const Comments = ({commentsData}) => {
  console.log();
  return (
    <ul className={style.list}>
      {(commentsData.length > 0) ?
        (commentsData.map((comment) => (
          <li className={style.item} key={comment.id}>
            <Text As='h3'
              className={style.author}
              size={18} tsize={22}>{comment.author}</Text>
            <Text As='p' className={style.comment} size={14} tsize={18}>
              {comment.body}
            </Text>
            <time dateTime={formatDate([comment.created])}>
              {formatDate([comment.created])}
            </time>
          </li>))) :
        (<Text As='p' className={style.comment} size={14} tsize={18}>
          Нет комментариев
        </Text>)
      }
    </ul>);
};

Comments.propTypes = {
  commentsData: PropTypes.array,
};
