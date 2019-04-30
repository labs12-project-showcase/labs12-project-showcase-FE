import history from '../history.js';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('backendToken');
const decoded = jwtDecode(token);

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('private route -> token, decoded, time', token, decoded, new Date().getTime() / 1000);
  if (token && new Date().getTime() / 1000 < decoded.exp) {
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