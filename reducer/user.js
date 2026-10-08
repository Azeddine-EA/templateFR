  import { createSlice } from '@reduxjs/toolkit';
  const initialState = {
    token: null,
    name: null,
    email: null,
  };

  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, action) => {
        state.token = action.payload.token;
        state.name = action.payload.name;
        state.email = action.payload.email;
      },
      logout: (state) => {
        state.token = null;
        state.name = null;
        state.email = null;
      },
    },
  });

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;