"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setAuthState = exports.authSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var authSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState: {
    isAuthendicated: false,
    isLoading: true,
    user: null
  },
  reducers: {
    setAuthState: function setAuthState(state, action) {
      state.isAuthendicated = action.payload.isAuthendicated;
      state.isLoading = action.payload.isLoading;
      state.user = action.payload.user;
    }
  }
});
exports.authSlice = authSlice;
var setAuthState = authSlice.actions.setAuthState;
exports.setAuthState = setAuthState;
var _default = authSlice.reducer;
exports["default"] = _default;