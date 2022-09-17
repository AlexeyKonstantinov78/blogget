import React, {useRef, useEffect} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({id, close}) => {
  const overlayRef = useRef(null);
  const [{
    title,
    author,
    selftext: markdown}, commentsData] = useCommentsData(id);

  const handleClick = (e) => {
    const target = e.target;

    if (target === overlayRef.current || e.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {title ? (
            <>
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
              <FormComment />
              {(commentsData.length > 0) ?
                (<Comments commentsData={
                  commentsData.filter(c => c.author !== undefined)
                } />) :
                (<></>)
              }
            </>
          ) : (
            <>
              <h2 className={style.title}>Загрузка</h2>
            </>
          )
        }
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
  id: PropTypes.string,
  markdown: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  close: PropTypes.func,
};

