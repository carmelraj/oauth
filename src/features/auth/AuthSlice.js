import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthendicated: false,
    isLoading: true,
    user: null,
  },
  reducers: {
    setAuthState(state, action) {
      state.isAuthendicated = action.payload.isAuthendicated;
      state.isLoading = action.payload.isLoading;
      state.user = action.payload.user;
    },
  },
});
export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;
