import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../features/auth/AuthSlice";
// import { setAuth } from "../Slice/AuthSlice";
import { useEffect } from "react";

const UseAuthLisener = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const disptach = useDispatch();
  useEffect(() => {
    disptach(setAuthState({ isAuthenticated, user, isLoading }));
  }, [disptach, isAuthenticated, user, isLoading]);
  return { isLoading, isAuthenticated, user };
};
export default UseAuthLisener;
