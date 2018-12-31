import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('HELLO SAGAS!');
}

export function* IncrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT'});
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSage() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ]);
};
