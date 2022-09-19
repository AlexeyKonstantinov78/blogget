import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';


export const CommentContext = React.createContext({});

export const CommentContextProvider = ({children}) => {
  const [value, setValue] = useState('');

  return (
    <CommentContext.Provider value={{value, setValue}}>
      {children}
    </CommentContext.Provider>
  );
};

CommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
