import React from 'react';
import style from './Rating.module.css';
import PropTypes from 'prop-types';

export const Rating = props => (
  <div className={style.rating}>
    <button className={style.up} aria-label="Уменьшить рейтинг" />
    <p className={style.ups}>{props.ups}</p>
    <button className={style.down} aria-label="Увеличить рейтинг" />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
