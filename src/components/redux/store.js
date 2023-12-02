import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filterReducer,
//   },
// });

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whilelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
