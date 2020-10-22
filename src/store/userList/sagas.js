import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { getListData as getListDataService } from './services';

function* getUserList({ payload: { pageId } }) {
  try {
    const {
      data: { results }
    } = yield call(getListDataService, pageId);
    yield put(actions.userListSuccess({ pageId, results }));
  } catch (error) {
    console.error(`Request-failed: ${error}`);
    yield put(actions.failedUserList({ pageId, results: [] }));
  }
}

export default function* userListSaga() {
  yield takeEvery(actions.ACTION_TYPES.GET, getUserList);
}
