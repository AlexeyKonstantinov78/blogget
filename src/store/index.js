import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReduser';
import { authReducer } from './auth/authReducer';
// import { postsReducer } from './posts/postsReducer';
import postsReducer from './posts/postSlice';
import commentsDataReducer from './comentsData/commentsDataSlice';
import { searchReducer } from './search/searchReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsReducer,
    commentsData: commentsDataReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
