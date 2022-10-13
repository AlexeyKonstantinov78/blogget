import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS,
} from './searchAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  after: '',
  isLast: false,
  page: '',
  count: 0,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        after: action.after,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export default searchReducer.reducer;
