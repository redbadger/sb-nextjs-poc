import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from '../../app/store';

export interface LoginState {
  name: string;
  surname: string;
  email: string;
}

const initialState: LoginState = {
  name: '',
  surname: '',
  email: '',
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSession: (state, action: PayloadAction<LoginState>) => {
      const {
        payload: { name, surname, email },
      } = action;
      state = { ...state, name, surname, email };
    },
  },
});

export const { setSession } = sessionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSession = (state: AppState) => state.session;

export default sessionSlice.reducer;
