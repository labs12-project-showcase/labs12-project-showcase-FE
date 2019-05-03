import React, { Component } from "react";
import history from "../history.js";
import { connect } from "react-redux";
import { login, logout } from "../auth/authActions.js";
import { NavLink } from "react-router-dom";
import { validateJwt } from "../config/utilities.js";
// import loginIcon from '../assets/login.png';
// import logoutIcon from '../assets/logout.png';

import whiteLambdaLogo from "../assets/Hire-lambda-logo-white.png";

class TopBar extends Component {
  state = {
    isLoggedIn: false
  };

  componentWillMount() {
    this.unlisten = history.listen((location, action) => {
      console.log("history from top bar", location, action);
      const update = validateJwt();
      this.setState({ isLoggedIn: update });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const renderLoggedIn = validateJwt();
    const { login, logout } = this.props;
    return (
      <div className="TopBar">
        <div className="TopBar-container">
          <NavLink exact to="/">
            <img
              className="TopBar-hire-lambda-logo"
              src={whiteLambdaLogo}
              alt="white lambda logo"
            />
          </NavLink>

          <div className="TopBar-btn-container">
            {!(this.state.isLoggedIn || renderLoggedIn) && (
              <button className="TopBar-login-btn" onClick={login}>
                <i className="fas fa-user" />
              </button>
            )}
            {(this.state.isLoggedIn || renderLoggedIn) && (
              <button className="TopBar-logout-btn" onClick={logout}>
                <i className="fas fa-sign-out-alt" />
              </button>
            )}
          </div>
        </div>
        {(this.state.isLoggedIn || renderLoggedIn) && (
          <div className="subNav">
            <nav>
              <NavLink exact to={`/student/profile/${this.props.id}`}>
                Your Profile
              </NavLink>
              <NavLink exact to="/student/new-project">
                Add New Project
              </NavLink>
              <NavLink exact to="/profile-quick-start">
                Edit Profile
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { id: state.profile.profileData.id };
};

export default connect(
  mapStateToProps,
  { login, logout }
)(TopBar);
