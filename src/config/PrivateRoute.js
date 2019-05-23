import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { validateJwt, getJwtRole } from './utilities.js';

const PrivateRoute = ({ component: Component, userRole, ...rest }) => {
  console.log('props.role in PrivateRoute', userRole);
  if (validateJwt() && getJwtRole() === userRole) {
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