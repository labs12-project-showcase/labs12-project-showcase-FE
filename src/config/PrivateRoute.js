import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { validateJwt } from './utilities.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (validateJwt()) {
    return (
      <Route {...rest} render={(props) => (
          true
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
      )} />
    );
  } else {
    return (
      <Redirect to="/" />
    );
  }
}

export default PrivateRoute;