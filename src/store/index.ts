import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './user/user.slice';
import gameSettingsReducer from './gameSettings/gameSettings.slice';
import gameDetailsReducer from './gameDetails/gameDetails.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    gameSettings: gameSettingsReducer,
    gameDetails: gameDetailsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
