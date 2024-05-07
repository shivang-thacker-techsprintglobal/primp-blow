export const useraccesstoken = value => dispatch => {
  dispatch({
    type: 'USER_ACCESS_TOKEN',
    payload: value,
  });
};

