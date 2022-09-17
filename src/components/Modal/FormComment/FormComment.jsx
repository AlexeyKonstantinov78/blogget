import React, {useContext, useRef} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';

export const FormComment = props => {
  const {auth} = useContext(authContext);
  const formCommit = useRef(null);

  const sendFormCommit = (event) => {
    event.preventDefault();
    formCommit.current.focus();
    console.log(formCommit.current.value);
  };

  return <form
    className={style.form}
    onSubmit={sendFormCommit}>
    <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
    <textarea className={style.textarea} ref={formCommit}></textarea>
    <button className={style.btn}>Отправить</button>
  </form>;
};
