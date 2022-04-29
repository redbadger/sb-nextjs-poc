import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignJWT, importPKCS8 } from 'jose';

import type { AppState } from '../../app/store';
import { privateCertificate, alg } from './shared';

export interface LoginState {
  name: string;
  surname: string;
  email: string;
  sessionToken: string;
}

type User = Pick<LoginState, 'name' | 'surname' | 'email'>;

const initialState: LoginState = {
  name: '',
  surname: '',
  email: '',
  sessionToken: '',
};

export const createSession = createAsyncThunk(
  'session/createSession',
  async (user: User) => {
    const privateKey = await importPKCS8(privateCertificate, alg);

    return await new SignJWT(user)
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(privateKey);
  },
);

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setLoginDetails: (state, action: PayloadAction<User>) => {
      const {
        payload: { name, surname, email },
      } = action;
      state.name = name;
      state.surname = surname;
      state.email = email;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.fulfilled, (state, { payload }) => {
      state.sessionToken = payload;
    });
  },
});

export const { setLoginDetails } = sessionSlice.actions;

export const selectSession = (state: AppState) => state.session;

export default sessionSlice.reducer;
