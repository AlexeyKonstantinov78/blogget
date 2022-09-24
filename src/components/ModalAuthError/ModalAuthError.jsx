import React, { useState } from 'react';
import style from './ModalAuthError.module.css';
import ReactDOM from 'react-dom';
import { ReactComponent as CloseIcon } from './img/close.svg';

export const ModalAuthError = ({ authError }) => {
  const [isDropdown, setIsDropdown] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDropdown(false);
  };

  return ReactDOM.createPortal(
    <>
      {isDropdown && (<div className={style.overlay}>
        <div className={style.modal}>
          <h2 className={style.title}>
            Ошибка получения данных о пользователе
          </h2>
          <div className={style.content}>
            <p>{authError}</p>
          </div>
          <button className={style.close} onClick={handleClick}>
            <CloseIcon />
          </button>
        </div>
      </div>)
      }
    </>,
    document.getElementById('modal__error-root')
  );
};
