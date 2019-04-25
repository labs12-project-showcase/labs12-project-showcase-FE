import React from 'react';

import whiteLambdaLogo from "../assets/Hire-lambda-logo-white.png";

const TopBar = props => {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div className="TopBar">
      <div className="TopBar-container">
        <img className="TopBar-hire-lambda-logo" src={whiteLambdaLogo} alt="white lambda logo"/>
        <div className="TopBar-btn-container">
          { !isAuthenticated() && ( <button className="TopBar-login-btn" onClick={login}>Login</button> ) }
          { isAuthenticated() && ( <button className="TopBar-logout-btn" onClick={logout}>Logout</button> ) }
        </div>
      </div>
    </div>
  );
}
 
export default TopBar;