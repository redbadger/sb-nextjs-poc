import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counterReducer from '../features/counter/counterSlice';
import sessionReducer from '../features/session/slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  session: sessionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
  });
}

const store = makeStore();

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
