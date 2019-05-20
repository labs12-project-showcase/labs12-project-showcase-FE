import React, { Component } from "react";
import history from "../history.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout, adminLogin } from "../auth/authActions.js";
import { NavLink } from "react-router-dom";
import { validateJwt, getJwtRole } from "../config/utilities.js";
import { deleteStudent } from "./student/profile/studentProfileActions.js";
import JoinProject from "./student/projectqs/JoinProject";
import LeaveProject from "./student/projectqs/LeaveProject";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class MobileMenuButton extends Component {
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
    const loggedInRole = getJwtRole();
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
            style={{ fontSize: "4rem", color: "white", margin: "30px" }}
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
          <MenuItem
            onClick={this.handleClose}
            style={{
              margin: "10px auto",
              padding: "20px"
            }}
          >
            <NavLink
              to="/discover"
              className="TopBar-search-btn"
              style={{
                color: "black",
                fontSize: "3rem",
                margin: "15px"
              }}
            >
              <div
                style={{
                  padding: "15px"
                }}
              >
                <i
                  className="fas fa-search-location"
                  style={{ color: "#bb1232", fontSize: "3rem" }}
                />
                Discover
              </div>
            </NavLink>
          </MenuItem>
          {!(this.state.isLoggedIn || renderLoggedIn) && (
            <div>
              <MenuItem
                style={{
                  margin: "10px auto",
                  padding: "20px"
                }}
                onClick={() => {
                  login();
                  this.handleClose();
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: "3rem",
                    margin: "15px"
                  }}
                >
                  <i
                    className="fas fa-user"
                    style={{ color: "#bb1232", fontSize: "3rem" }}
                  />
                  Register / Sign In{" "}
                </div>
              </MenuItem>
            </div>
          )}
          {(this.state.isLoggedIn || renderLoggedIn) && (
            <MenuItem
              style={{
                margin: "20px",
                padding: "20px"
              }}
              onClick={() => {
                logout();
                this.handleClose();
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "3rem",
                  margin: "15px",
                  padding: "20px 0"
                }}
              >
                <i
                  className="fas fa-sign-out-alt hamburger-menu-item"
                  style={{
                    color: "#bb1232",
                    fontSize: "3rem",
                    padding: "30px 0"
                  }}
                />{" "}
                Sign Out
              </div>
            </MenuItem>
          )}
          {(this.state.isLoggedIn || renderLoggedIn) &&
            loggedInRole === "student" && (
              <div className="subNav">
                <nav>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      exact
                      to={`/student/profile/${this.props.id}`}
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        margin: "15px"
                      }}
                    >
                      <i
                        className="far fa-id-card"
                        style={{ color: "#bb1232", fontSize: "3rem" }}
                      />{" "}
                      Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      exact
                      to="/profile-quick-start"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        margin: "20px"
                      }}
                    >
                      <i
                        className="fas fa-user-edit"
                        style={{ color: "#bb1232", fontSize: "3rem" }}
                      />{" "}
                      Edit Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      exact
                      to="/student/new-project"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        margin: "20px"
                      }}
                    >
                      <i
                        className="fas fa-plus"
                        style={{ color: "#bb1232", fontSize: "3rem" }}
                      />{" "}
                      Add New Project
                    </NavLink>
                  </MenuItem>
                  {this.props.location.pathname.match(
                    /\/student\/project-view\/\d+/g
                  ) ? (
                    this.checkOwner(this.props.project_students) ? (
                      <div>
                        <MenuItem
                          style={{
                            margin: "10px",
                            padding: "20px",
                            color: "black"
                          }}
                          onClick={() => {
                            this.handleClose();
                          }}
                        >
                          <NavLink
                            exact
                            to={`/student/edit-project/${
                              this.props.project_id
                            }`}
                            style={{
                              color: "black",
                              fontSize: "3rem",
                              margin: "20px"
                            }}
                          >
                            <i style={{ color: "#bb1232", fontSize: "3rem" }} />{" "}
                            <LeaveProject project_id={this.props.project_id} />
                          </NavLink>
                        </MenuItem>
                        <MenuItem
                          style={{
                            margin: "10px",
                            padding: "20px"
                          }}
                        >
                          <NavLink
                            exact
                            to={`/student/edit-project/${
                              this.props.project_id
                            }`}
                            className="hamburger-menu-item"
                            style={{
                              color: "black",
                              fontSize: "3rem",
                              margin: "20px"
                            }}
                          >
                            <i
                              className="fas fa-edit"
                              style={{ color: "#bb1232", fontSize: "3rem" }}
                            />{" "}
                            Edit Project
                          </NavLink>
                        </MenuItem>
                      </div>
                    ) : (
                      <MenuItem
                        style={{
                          margin: "10px auto",
                          padding: "20px"
                        }}
                        onClick={() => {
                          this.handleClose();
                        }}
                      >
                        <i style={{ color: "#bb1232", fontSize: "3rem" }} />{" "}
                        <JoinProject project_id={this.props.project_id} />
                      </MenuItem>
                    )
                  ) : null}
                </nav>
              </div>
            )}
          {(this.state.isLoggedIn || renderLoggedIn) &&
            loggedInRole === "staff" && (
              <div className="subNav">
                <nav>
                  <MenuItem
                    style={{
                      margin: "10px auto",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      to="/admin/students-table"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        padding: "15px"
                      }}
                    >
                      <i
                        className="fas fa-graduation-cap"
                        style={{
                          color: "#bb1232",
                          fontSize: "3rem",
                          margin: "10px"
                        }}
                      />{" "}
                      Students
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      to="/admin/projects-table"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        padding: "15px"
                      }}
                    >
                      <i
                        className="fas fa-project-diagram"
                        style={{
                          color: "#bb1232",
                          fontSize: "3rem",
                          margin: "10px"
                        }}
                      />{" "}
                      Projects
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      to="/admin/accounts-table"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        padding: "15px"
                      }}
                    >
                      <i
                        className="fas fa-align-left"
                        style={{
                          color: "#bb1232",
                          fontSize: "3rem",
                          margin: "10px"
                        }}
                      />{" "}
                      Accounts
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      to="/admin/tracks-table"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        padding: "15px"
                      }}
                    >
                      <i
                        className="fas fa-code"
                        style={{
                          color: "#bb1232",
                          fontSize: "3rem",
                          margin: "10px"
                        }}
                      />{" "}
                      Tracks
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    style={{
                      margin: "10px",
                      padding: "20px"
                    }}
                    onClick={() => {
                      this.handleClose();
                    }}
                  >
                    <NavLink
                      to="/admin/cohorts-table"
                      className="hamburger-menu-item"
                      style={{
                        color: "black",
                        fontSize: "3rem",
                        padding: "15px"
                      }}
                    >
                      <i
                        className="fas fa-users"
                        style={{
                          color: "#bb1232",
                          fontSize: "3rem"
                        }}
                      />{" "}
                      Cohorts
                    </NavLink>
                  </MenuItem>
                </nav>
              </div>
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
  )(MobileMenuButton)
);
