import React from 'react';
import { Route } from 'react-router-dom';

import Callback from '../auth/Callback.js';
import Home from '../components/home/Home.js';
import Register from '../components/register/Register.js';

const handleAuthentication = ({location, auth}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = props => {
  return (
    <>
      <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} /> 
      }}/>
    </>
  );
};
 
export default Routes;