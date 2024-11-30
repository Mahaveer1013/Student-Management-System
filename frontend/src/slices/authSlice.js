import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // { id: 1, name: 'John Doe', role: 'student' }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Payload contains user data
    },
    logout: (state) => {
      state.user = null; // Clear user data
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
