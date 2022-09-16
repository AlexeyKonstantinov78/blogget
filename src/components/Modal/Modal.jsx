import React, {useRef, useEffect} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';

export const Modal = ({title, author, markdown, close}) => {
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          <Markdown options={{
            override: {
              a: {
                props: {
                  target: '_blank',
                }
              }
            }
          }}>
            {markdown}
          </Markdown>
        </div>
        <p className={style.author}>{author}</p>
        <button
          className={style.close}
          onClick={close}
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  markdown: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  close: PropTypes.func,
};

