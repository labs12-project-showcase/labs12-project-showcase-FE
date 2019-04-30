import React from 'react';
import { Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const token = localStorage.getItem("backendToken");
const decoded = jwtDecode(token);

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem() && new Date().getTime() < decoded.exp) {

  } else {
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
  }
}

export default PrivateRoute;