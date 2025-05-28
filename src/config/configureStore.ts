import { configureStore } from '@reduxjs/toolkit';

import postSlice from '@store/post';
import userSlice from '@store/user';

const isDev = process.env.NODE_ENV === 'development';

export const makeStore = () => {
  const store = configureStore({
    reducer: { user: userSlice.reducer, post: postSlice.reducer },
    devTools: isDev
  });
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
