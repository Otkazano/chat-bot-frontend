import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainButtonSlice from './mainButtonSlice';
import dialogReducer from './dialogSlice';
import messageSlice from './messageSlice';
import filesSlice from './filesSlice';

const rootReducer = combineReducers({
  dialog: dialogReducer,
  mainButton: mainButtonSlice,
  message: messageSlice,
  files: filesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
