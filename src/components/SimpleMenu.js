import React, { Component } from "react";
import history from "../history.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout, adminLogin } from "../auth/authActions.js";
import { NavLink } from "react-router-dom";
import { validateJwt } from "../config/utilities.js";
import { deleteStudent } from "./student/profile/studentProfileActions.js";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class SimpleMenu extends Component {
  state = {
    anchorEl: null,
    isLoggedIn: this.props.isLoggedIn
  };

  componentWillMount() {
    this.unlisten = history.listen((location, action) => {
      const update = validateJwt();
      this.setState({ isLoggedIn: update });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  checkOwner = arr => {
    if (arr) {
      const owner = arr.filter(member => {
        return member.student_id === this.props.id;
      });
      if (owner && owner.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const renderLoggedIn = validateJwt();
    const { login, logout } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className="simple-menu-container">
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <i
            className="fas fa-bars"
            style={{ fontSize: "3rem", color: "white" }}
          />
        </Button>
        <Menu
          id="simple-menu"
          className="simple-menu-popup"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          style={{ zIndex: "100000" }}
        >
          <MenuItem onClick={this.handleClose}>
            <NavLink to="/discover" className="TopBar-search-btn">
              <i
                className="fas fa-search-location"
                style={{ fontSize: "2rem" }}
              />
              Discover
            </NavLink>
          </MenuItem>
          {!(this.state.isLoggedIn || renderLoggedIn) && (
            <div>
              <MenuItem
                onClick={() => {
                  login();
                  this.handleClose();
                }}
              >
                <i className="fas fa-user" style={{ fontSize: "2rem" }} />
                Register / Sign in{" "}
              </MenuItem>
            </div>
          )}
          {(this.state.isLoggedIn || renderLoggedIn) && (
            <MenuItem
              onClick={() => {
                logout();
                this.handleClose();
              }}
            >
              <i className="fas fa-sign-out-alt" style={{ fontSize: "2rem" }} />{" "}
              Sign Out
            </MenuItem>
          )}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.profile.profileData.id,
    project_students: state.project.projectData.students,
    project_id: state.project.projectData.id
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login, logout, adminLogin, deleteStudent }
  )(SimpleMenu)
);
