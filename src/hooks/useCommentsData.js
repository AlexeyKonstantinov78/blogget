import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  commentsDataRequestAsync
} from '../store/comentsData/commentsDataAction';

export const useCommentsData = (id) => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const post = useSelector(state => state.commentsData.data);
  const commentsData = useSelector(state => state.commentsData.comments);
  const status = useSelector(state => state.commentsData.status);

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

  return [post, commentsData, status];
};

useCommentsData.propTypes = {
  id: PropTypes.string,
};
