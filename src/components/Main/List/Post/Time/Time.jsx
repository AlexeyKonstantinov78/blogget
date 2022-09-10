import React from 'react';
import style from './Time.module.css';
import formatDate from '../../../../../utils/formatFate';
import PropTypes from 'prop-types';

export const Time = props => (
  <time
    className={style.date}
    dateTime={formatDate(props.date)}
  >{formatDate(props.date)}</time>
);

Time.propTypes = {
  date: PropTypes.string,
};
