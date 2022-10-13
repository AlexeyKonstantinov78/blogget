import { put, takeLatest, select, call } from 'redux-saga/effects';
import { URL } from '../../API/const';
import axios from 'axios';
import {
  searchRequestError,
  searchRequestSuccess,
  SEARCH_REQUEST } from './searchAction';

function* fetchSearch(search) {
  const token = yield select(state => state.token.token);
  try {
    const request = yield call(axios, `${URL}/search/?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    yield put(searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

// function* workerSearch(action) {
//   const token = yield select(state => state.token.token);
//   const data = yield call(fetchSearch, action.search, token);
//   yield put(searchRequestSuccess(data.data));
// }

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
