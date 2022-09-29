import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReduser';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';
import { commentsDataReducer } from './comentsData/commentsDataReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsReducer,
    commentsData: commentsDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
