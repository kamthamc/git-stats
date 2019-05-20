import { fork, all } from 'redux-saga/effects';

import { statsSagas } from "../Containers/Stats";


export default function* sagas() {
  yield all([
    fork(statsSagas),
  ]);
}