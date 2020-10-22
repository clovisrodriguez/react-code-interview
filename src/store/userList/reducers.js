import { ACTION_TYPES } from './actions';
import { REQUEST_STATE } from '../../utils/const';

const initialState = {
  results: [],
  pageId: 1,
  state: REQUEST_STATE.UNLOAD
};

export default (state = initialState, { type, payload }) => {
  if (!payload) return state;

  switch (type) {
    case ACTION_TYPES.SUCCESS:
      return { ...payload, state: REQUEST_STATE.SUCCESS };
    case ACTION_TYPES.FAILED:
      return { ...payload, state: REQUEST_STATE.FAILED };
    default:
      return state;
  }
};
