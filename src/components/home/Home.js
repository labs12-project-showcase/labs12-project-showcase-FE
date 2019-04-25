import React from 'react';
import { connect } from 'react-redux';

const Home = props => {

  const { isAuthenticated, login, logout } = props.auth;

  return (
    <div className="home">
      {props.welcome}
      { !isAuthenticated() && ( <button onClick={login}>Log in to this app!</button> ) }
      { isAuthenticated() && ( <button onClick={logout}>Log out of this app!</button> ) }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.home
  };
};

export default connect(mapStateToProps)(Home);