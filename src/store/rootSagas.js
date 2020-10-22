import { all, fork } from "redux-saga/effects";
import userListSaga from '../store/userList/sagas'

export default function* rootSaga() {
  yield all([fork(userListSaga)]);
}
