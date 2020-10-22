export const ACTION_TYPES = {
  GET: 'USER_LIST/GET',
  FAILED: 'USER_LIST/FAILED',
  SUCCESS: 'USER_LIST/SUCCESS'
};

export const getUserList = (payload) => ({
  type: ACTION_TYPES.GET,
  payload
});

export const failedUserList = () => ({
    type: ACTION_TYPES.FAILED
});
export const userListSuccess = (payload) => ({
  type: ACTION_TYPES.SUCCESS,
  payload
});
