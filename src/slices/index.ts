import { configureStore } from '@reduxjs/toolkit';

import groupsReducer from './groupsSlice';

export const store = configureStore({
  reducer: {
    groups: groupsReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export default RootState;
