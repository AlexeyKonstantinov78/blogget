import React from 'react';
import style from './Heading.module.css';

// eslint-disable-next-line arrow-body-style, react/prop-types
export const Heading = ({text}) => {
  return (
    <>
      <h1 className={style.heading}>
        {text}
      </h1>
    </>
  );
};
