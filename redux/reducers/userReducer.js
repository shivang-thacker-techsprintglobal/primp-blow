import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading:false,
  addons_modal_visible:false,
  addons_details:[],
  get_date_appointment:'',
  get_time_appointment:''
  
};

const initialTokenState = {
  access_token: undefined,
  navigation_path: '',
  token_fetch: false,
  customer_id: null,
  find_treatments: [],
  get_all_locations: [],
  get_customer: null,
  homeaddress: 'Select Store',
};

export const customerReducer = createReducer(initialState, builder => {
  builder

  

  .addCase('CUSTOMER_DETAILS', (state, action) => {
    state.customer_details = action.payload;
  })
  
  .addCase('START_LOADING', (state) => {
    state.loading = true;
  })
  .addCase('STOP_LOADING', (state) => {
    state.loading = false;
  })
  
  
  .addCase('CURRENT_LOCATION', (state,action) => {
    state.currentlocation = action.payload;
  })
  
  
  

  .addCase('TOAST_MESSAGE', (state,action) => {
    state.toast_message = action.payload;
  })
  .addCase('TOAST_VISIBLE', (state,action) => {
    state.toast_visible = action.payload;
  })
  
  .addCase('ADDONS_MODAL_VISIBLE', (state,action) => {
    state.addons_modal_visible = action.payload;
  })
  .addCase('ADDONS_DETAILS', (state,action) => {
    state.addons_details = action.payload;
  })
  
  .addCase('PARENT_ITEM_ID', (state,action) => {
    state.parent_item_id = action.payload;
  })
  
  .addCase('TIME_SLOTS', (state,action) => {
    state.time_slots = action.payload;
  })
  .addCase('GET_DATE_APPOINTMENT', (state,action) => {
    state.get_date_appointment = action.payload;
  })
  .addCase('GET_TIME_APPOINTMENT', (state,action) => {
    state.get_time_appointment = action.payload;
  })
  

  
  
  

  
});

export const tokenReducer = createReducer(initialTokenState, builder => {
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
  .addCase('CUSTOMER_ID', (state, action) => {
    state.customer_id = action.payload;
  })
  .addCase('FIND_TREATMENTS', (state,action) => {
    state.find_treatments = action.payload;
  })
  .addCase('GET_ALL_LOCATIONS', (state,action) => {
    state.get_all_locations = action.payload;
  })

  
  .addCase('GET_CUSTOMER', (state,action) => {
    state.get_customer = action.payload;
  })
  .addCase('HOME_ADDRESS', (state,action) => {
    state.homeaddress = action.payload;
  })
  
 
});

export const cartReducer = createReducer(initialState, (builder) => {
  builder
  .addCase('ADD_TO_CART', (state, action) => {
    state.items.push({ ...action.payload, subItems: [] });
  })
    .addCase('REMOVE_FROM_CART', (state, action) => {
      state.items = state.items.filter(item => item.ID !== action.payload);
    })
    .addCase('ADD_SUBITEM_TO_CART', (state, action) => {
      const { parentItemId, subItem } = action.payload;
      const parentItemIndex = state.items.findIndex(item => item.ID === parentItemId);
      if (parentItemIndex !== -1) {
        state.items[parentItemIndex].subItems.push(subItem);
      }
    })
    .addCase('REMOVE_SUBITEM_FROM_CART', (state, action) => {
      const { parentItemId, subItemId } = action.payload;
      const parentItemIndex = state.items.findIndex(item => item.ID === parentItemId);
      if (parentItemIndex !== -1) {
        state.items[parentItemIndex].subItems = state.items[parentItemIndex].subItems.filter(subItem => subItem.ID !== subItemId);
      }
    });
});