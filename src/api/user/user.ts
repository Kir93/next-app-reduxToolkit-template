import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILogIn } from './user.types';

export const logIn = createAsyncThunk('/user/login', ({ id }: ILogIn): string => id);

export const logOut = createAsyncThunk('/user/logout', (): null => null);
