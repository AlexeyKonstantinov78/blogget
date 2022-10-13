import { takeEvery } from 'redux-saga/effects';
import { watchSearch } from './search/searchSaga';

let i = 0;
function* workerSaga(action) {
  yield console.log('работает', i++);
}

export function* watchSaga() {
  yield takeEvery('SUBMIT', workerSaga);
}

export default function* rootSaga() {
  yield watchSearch();
}
