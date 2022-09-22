import style from './ButtonDelete.module.css';
import { ReactComponent as ButtonDeleteIcon } from './img/delete.svg';

export const ButtonDelete = (props) => (
  <button className={style.delete}>
    <ButtonDeleteIcon />
  </button>
);
