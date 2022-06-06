/* eslint-disable */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  authSelector,
  logout,
  refreshToken,
} from "../feautures/auth/authSlice";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, user, errorMessage } = useSelector(authSelector);
  const access_token = JSON.parse(localStorage.getItem("access_token"));
  const currentTime = new Date().getTime();

  const isExpired = currentTime > access_token.expires;

  useEffect(() => {
    if (isExpired) {
      dispatch(refreshToken());
    }
  }, [isExpired, dispatch]);

  return !isLoading && !isError && <Outlet />;
};

export default AuthLayout;
