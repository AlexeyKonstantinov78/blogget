import React from 'react';
import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentReduser';
import { useAuth } from '../../../hooks/useAuth';

export const FormComment = (props) => {
  const value = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  const sendFormCommit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  const handleChange = (event) => {
    dispatch(updateComment(event.target.value));
  };

  return (
    <form className={style.form} onSubmit={sendFormCommit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
