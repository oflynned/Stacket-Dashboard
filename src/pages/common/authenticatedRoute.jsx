import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log(auth);
        if (auth.hasVerifiedSession) {
          console.log('verified');
          return <Component {...props} />;
        }

        console.log('not verified');
        return <Redirect to="/login"/>;
      }}
    />
  );
};

export default AuthenticatedRoute;
