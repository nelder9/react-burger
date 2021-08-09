import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authActions } from "../../services/actions/auth";

export const ProtectedRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const hasToken = localStorage.getItem("refreshToken");
    const { validToken } = useSelector((store) => store.auth);

    useEffect(() => {
        if (hasToken) {
            console.log(hasToken)
            dispatch(authActions.updateToken(hasToken));
        } else {
            console.log(3)
            dispatch(authActions.setTokenInvalid());
        }
    }, [dispatch]);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                hasToken && validToken ? (
                    children
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: location } }} />
                )
            }
        />
    );
};
