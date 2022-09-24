import {
  COMMENTS_DATA_REQUEST,
  COMMENTS_DATA_SUCCESS,
  COMMENTS_DATA_ERROR,
} from './commentsDataAction';

const initialState = {
  status: '',
  data: {},
  comments: {},
  error: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA_REQUEST:
      return {
        ...state,
        status: 'loading',
        data: {},
        comments: {},
        error: '',
      };
    case COMMENTS_DATA_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        data: action.data,
        comments: action.comments,
        error: '',
      };
    case COMMENTS_DATA_ERROR:
      return {
        ...state,
        status: 'error',
        data: {},
        comments: {},
        error: action.err,
      };
    default:
      return state;
  }
};
