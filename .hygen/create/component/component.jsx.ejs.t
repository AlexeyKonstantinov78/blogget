---
to: <%= absPath %>/<%= component_name %>.jsx
---

import React from 'react';
import style from './<%= component_name %>.module.css';

export const <%= component_name %> = props => (
  <div className={style.container}></div>
);
