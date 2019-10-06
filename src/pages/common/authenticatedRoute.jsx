import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.verifiedSession ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login"/>
      )
    }
  />
);

export default PrivateRoute;
