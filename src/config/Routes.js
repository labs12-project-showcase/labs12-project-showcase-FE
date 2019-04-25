import React from 'react';
import { Route } from 'react-router-dom';

import Callback from '../auth/Callback.js';
import Home from '../components/home/Home.js';
// import Register from '../components/register/Register.js';

const Routes = props => {
  let handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
      props.auth.handleAuthentication();
    }
  };
  return (
    <>
      <Route path="/" render={(props) => <Home auth={props.auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} /> 
      }}/>
    </>
  );
};
 
export default Routes;