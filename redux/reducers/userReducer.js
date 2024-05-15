import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading:false,
  homeaddress: 'Austin -  Prime and Blow Austin Tri',
  access_token:''
};

export const customerReducer = createReducer({}, builder => {
  builder

  

  .addCase('CUSTOMER_DETAILS', (state, action) => {
    state.customer_details = action.payload;
  })

 

  .addCase('CUSTOMER_ID', (state, action) => {
    state.customer_id = action.payload;
  })
  .addCase('START_LOADING', (state) => {
    state.loading = true;
  })
  .addCase('STOP_LOADING', (state) => {
    state.loading = false;
  })
  .addCase('HOME_ADDRESS', (state,action) => {
    state.homeaddress = action.payload;
  })
  .addCase('CURRENT_LOCATION', (state,action) => {
    state.currentlocation = action.payload;
  })
  
  
  .addCase('GET_ALL_LOCATIONS', (state,action) => {
    state.get_all_locations = action.payload;
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
  .addCase('ACCESS_TOKEN', (state, action) => {
    state.access_token = action.payload;
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