import { configureStore } from '@reduxjs/toolkit';
import mainButtonSlice from './reducers/mainButtonSlice';
import dialogSlice from './reducers/dialogSlice';
import messageSlice from './reducers/messageSlice';
import filesSlice from './reducers/filesSlice';
import setMessagesSlice from './reducers/setMessagesSlice';
import isErrorConnectionSlice from './reducers/isErrorConnectionSlice';

const store = configureStore({
  reducer: {
    dialog: dialogSlice,
    mainButton: mainButtonSlice,
    message: messageSlice,
    files: filesSlice,
    setMessages: setMessagesSlice,
    isErrorConnection: isErrorConnectionSlice,
  },
});

export default store;
