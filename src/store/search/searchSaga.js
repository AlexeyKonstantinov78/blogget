import { put, takeLatest, select, call } from 'redux-saga/effects';
import { URL } from '../../API/const';
import axios from 'axios';
import { searchRequestSuccess, SEARCH_REQUEST } from './searchAction';

const fetchSearch = async (action, token) => {
  const request = await axios(`${URL}/search/?q=${action.search}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return request.data;
};

function* workerSearch(action) {
  const token = yield select(state => state.token.token);
  const data = yield call(fetchSearch, action.search, token);
  yield put(searchRequestSuccess(data.data));
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, workerSearch);
}
