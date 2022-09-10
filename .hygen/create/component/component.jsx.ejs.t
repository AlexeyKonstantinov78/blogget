---
to: <%= absPath %>/<%= component_name %>.jsx
---

import React from 'react';
import style from './<%= component_name %>.module.css';

// eslint-disable-next-line arrow-body-style
export const <%= component_name %> = props => {
  return <div className={style.container}></div>;
};
