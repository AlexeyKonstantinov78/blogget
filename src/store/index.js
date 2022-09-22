import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReduser';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

const logger = (store) => (next) => (action) => {
  console.log('action:', action);
  next(action);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);
