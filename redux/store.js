import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { tokenReducer, cartReducer, customerReducer} from './reducers/userReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore,
    persistReducer,
  } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, tokenReducer);

// Create the Redux store
const store = configureStore({
    reducer:{token : persistedReducer, cart : cartReducer, customer: customerReducer} ,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
    serializableCheck: false,
      }),
  })
  

export const persistor = persistStore(store);
export const BASE_URL = 'https://api-staging.booker.com';
export {store};




