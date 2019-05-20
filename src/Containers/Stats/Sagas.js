import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchRepositories } from './Services';
import ActionTypes from "./ActionTypes";

function* fetchRepositoriesSaga() {
  try {
    yield put({
      type: ActionTypes.FETCH_REPOSITORIES_IN_PROGRESS
    });
    const response = yield call(fetchRepositories);
    yield put({
      type: ActionTypes.FETCH_REPOSITORIES_COMPLETED,
      payload: {
        repositories: response.data
      },
    });
  } catch (ex) {
    yield put({
      type: ActionTypes.FETCH_REPOSITORIES_FAILED,
      payload: {
        error: ex.message || ex.description
      }
    });
    console.error(ex);
  }
}


export default function* () {
  yield takeLatest(ActionTypes.FETCH_REPOSITORIES, fetchRepositoriesSaga);
}