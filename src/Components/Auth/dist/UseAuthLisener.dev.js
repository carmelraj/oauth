"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth0React = require("@auth0/auth0-react");

var _reactRedux = require("react-redux");

var _AuthSlice = require("../../features/auth/AuthSlice");

var _react = require("react");

// import { setAuth } from "../Slice/AuthSlice";
var UseAuthLisener = function UseAuthLisener() {
  var _useAuth = (0, _auth0React.useAuth0)(),
      isAuthenticated = _useAuth.isAuthenticated,
      user = _useAuth.user,
      isLoading = _useAuth.isLoading;

  var disptach = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    disptach((0, _AuthSlice.setAuthState)({
      isAuthenticated: isAuthenticated,
      user: user,
      isLoading: isLoading
    }));
  }, [disptach, isAuthenticated, user, isLoading]);
  return {
    isLoading: isLoading,
    isAuthenticated: isAuthenticated,
    user: user
  };
};

var _default = UseAuthLisener;
exports["default"] = _default;