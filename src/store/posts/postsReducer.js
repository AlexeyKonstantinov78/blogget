import {
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS_AFTER,
  POST_REQUEST_ERROR,
  CHANGE_PAGE,
} from './postsAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  after: '',
  isLast: false,
  page: '',
  count: 0,
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
        isLast: !action.after,
      };
    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        error: '',
        after: action.after,
        isLast: !action.after,
        count: state.count + 1,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        data: {},
        page: action.page,
        after: '',
        isLast: false,
        count: 0,
      };
    default:
      return state;
  }
};
