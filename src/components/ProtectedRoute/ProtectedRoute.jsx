import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({ component, children, ...props }) => {
  const user = useSelector((store) => store.user);
  const ProtectedComponent = component || (() => children);

  return (
    <Route
      // all props like 'exact' and 'path' that were passed in
      // are now passed along to the 'Route' Component
      {...props}
    >
      {user.id ?
        // If the user is logged in, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the Loginpage
        <LoginPage />
      }
    </Route>
  );
}

export default ProtectedRoute;
