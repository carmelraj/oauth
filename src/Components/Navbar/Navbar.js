import React from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  const { isAuthendicated, isLoading } = useSelector((state) => state.auth);
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div className="header">
      {isLoading ? (
        <></>
      ) : isAuthendicated ? (
        <button
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: process.env.REACT_APP_AUTH0_RETURN_URL,
              },
            })
          }
        >
          Logout
        </button>
      ) : (
        <>
          <button onClick={() => loginWithRedirect()}>Login</button>
          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: process.env.REACT_APP_AUTH0_RETURN_URL,
                },
              })
            }
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
export default NavBar;
