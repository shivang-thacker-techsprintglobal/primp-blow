import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const customerReducer = createReducer({}, builder => {
  builder

  .addCase('CUSTOMER_ID', (state, action) => {
    state.customer_id = action.payload;
  })
  


});

export const tokenReducer = createReducer({}, builder => {
  builder
  
  .addCase('NAVIGATION_PATH', (state, action) => {
    state.navigation_path = action.payload;
  })

  .addCase('TOKEN_FETCH', (state, action) => {
    state.token_fetch = action.payload;
  })
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