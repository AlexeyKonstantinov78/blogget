import React from 'react';
import classNames from 'classnames';
// import style from './InlineSvg.module.css';
import PropTypes from 'prop-types';


export const InlineSvg = props => {
  const {
    src,
    className,
    width,
    height
  } = props;

  const classes = classNames(className);
  console.log(src);
  return (
    <>
      <svg
        src={src}
        className={classes}
        width={width}
        height={height}
        alt="alt"/>
    </>
  );
};

InlineSvg.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
