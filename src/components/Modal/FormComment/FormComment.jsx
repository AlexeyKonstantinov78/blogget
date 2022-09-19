import React, {useContext} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {CommentContext} from '../../../context/commentContext';
import {useStore} from 'react-redux';

export const FormComment = props => {
  const store = useStore();
  const value = store.getState().comment;
  const {auth} = useContext(authContext);
  const {setValue} = useContext(CommentContext);

  const sendFormCommit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return <form
    className={style.form}
    onSubmit={sendFormCommit}>
    <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
    <textarea
      className={style.textarea}
      value={value}
      onChange={handleChange}
    />
    <button className={style.btn}>Отправить</button>
  </form>;
};
