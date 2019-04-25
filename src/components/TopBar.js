import React from 'react';

const TopBar = props => {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div className="topBar">
      <div className="topBarIconContainer">
        <div>Hire Lambda</div>
        <div>
          { !isAuthenticated() && ( <button onClick={login}>Login!</button> ) }
          { isAuthenticated() && ( <button onClick={logout}>Logout!</button> ) }
        </div>
      </div>
    </div>
  );
}
 
export default TopBar;