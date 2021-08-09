import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router, useLocation, useHistory } from "react-router-dom";

import { ProtectedRoute } from "./protected-route";
import AppHeader from '../app-header/app-header';
import LoginPage from '../../pages/login-page/login-page';
import HomePage from '../../pages/home-page/home-page';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import ProfilePage from '../../pages/profile-page/profile';

import { getCookie } from '../../services/utils';
import { useDispatch } from 'react-redux';

export default function App() {
  //const dispatch = useDispatch();
  //const location = useLocation();
  const history = useHistory();
  

  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
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
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
}
