import React from 'react';
import PropTypes from 'prop-types';
import { useCommentsData } from '../hooks/useCommentsData';

export const CommentsDataContext = React.createContext({});

export const CommentsDataContextProvider = ({ children }) => {
  const [commentsData] = useCommentsData();

  return (
    <CommentsDataContext.Provider value={{ commentsData }}>
      {children}
    </CommentsDataContext.Provider>
  );
};

CommentsDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
