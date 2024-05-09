import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {userReducer, tokenReducer, cartReducer} from './reducers/userReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, tokenReducer);

// Create the Redux store
const store = configureStore({
    reducer:{token : persistedReducer, cart : cartReducer} ,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  

export const persistor = persistStore(store);
export {store};




