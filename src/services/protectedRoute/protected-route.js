import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authActions } from "../actions/auth";

export const ProtectedRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const { isAuthorized } = useSelector((store) => store.auth);
  
    useEffect(() => {
      const refreshToken = localStorage.getItem("refreshToken");
  
      if (!isAuthorized && refreshToken) {
        dispatch(authActions.updateToken(refreshToken));
      }
    }, [dispatch, isAuthorized]);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthorized ? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      />
    );
  };
