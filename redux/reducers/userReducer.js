import {createReducer} from '@reduxjs/toolkit';

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