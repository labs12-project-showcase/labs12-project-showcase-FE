import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/home/Home.js';
import Register from '../components/register/Register.js';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}
 
export default Routes;