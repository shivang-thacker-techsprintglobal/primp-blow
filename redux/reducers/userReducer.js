import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const userReducer = createReducer({}, builder => {
  builder

    //toast
    .addCase('TOAST_MESSAGE', (state, action) => {
      state.toast_message = action.payload;
    })


});

export const tokenReducer = createReducer({}, builder => {
  builder.addCase('USER_ACCESS_TOKEN', (state, action) => {
    state.user_access_token = action.payload;
  });
});

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('ADD_TO_CART', (state, action) => {
      state.items.push(action.payload);
    })
    .addCase('REMOVE_FROM_CART', (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    });
});