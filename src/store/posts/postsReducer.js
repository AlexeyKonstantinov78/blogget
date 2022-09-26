import {
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
} from './postsAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  after: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        after: action.after,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    default:
      return state;
  }
};
