import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";


import { getItems } from "../../services/actions/items";
import { ProtectedRoute } from "./protected-route";
import { authActions } from "../../services/actions/auth";
import AppHeader from '../app-header/app-header';
import LoginPage from '../../pages/login-page/login-page';
import HomePage from '../../pages/home-page/home-page';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import ProfilePage from '../../pages/profile-page/profile';
import Ingredient from '../../pages/ingredient-page/ingredient';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ProfileOrdersPage from '../../pages/profile-orders-page/profile-orders-page';

import { getCookie } from '../../services/utils';

export default function App() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    const accessToken = getCookie("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!isAuthorized && refreshToken) {
      dispatch(authActions.setAuthorization({ accessToken, refreshToken }));
    }
  }, [dispatch, isAuthorized]);

  const location = useLocation();
  const modal = location.state && location.state.modal;

  return (
    <>
      <AppHeader />
        <Switch location={modal || location}>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>
          <Route path={`/ingredients/:ingredientId`}>
            <Ingredient />
          </Route>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders" exact={true}>
            <ProfileOrdersPage />
          </ProtectedRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      
    </>
  );
}
