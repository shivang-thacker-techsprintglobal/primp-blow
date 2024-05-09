export const useraccesstoken = value => dispatch => {
  dispatch({
    type: 'USER_ACCESS_TOKEN',
    payload: value,
  });
};



// Cart user Actions

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});
