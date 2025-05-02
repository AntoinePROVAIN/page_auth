import { configureStore } from '@reduxjs/toolkit';
// Exemple d'import d'un reducer
// import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    // user: userReducer,
  },
});

// Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
