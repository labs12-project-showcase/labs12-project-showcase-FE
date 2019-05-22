import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout, adminLogin } from "../auth/authActions.js";
import { NavLink } from "react-router-dom";
import { validateJwt, getJwtRole } from "../config/utilities.js";
import { deleteStudent } from "./student/profile/studentProfileActions.js";
import { withStyles } from "@material-ui/core/styles";
import history from "../history.js";
import JoinProject from "./student/projectqs/JoinProject";
import LeaveProject from "./student/projectqs/LeaveProject";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

const styles = {
  list: {
    width: 240
  }
};

const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

class SwipeableTemporaryDrawer extends Component {
  state = {
    right: false,
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

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const renderLoggedIn = validateJwt();
    const loggedInRole = getJwtRole();
    const { login, logout } = this.props;
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List className="public-list" zIndex={zIndex.drawer}>
        <ListItem
            button
            
            value="Close Menu"
            onClick={e => {
              console.log(`The close-menu button was clicked!`);
            }}
          >
            <Typography
              variant="h4"
              style={{ marginLeft: "20px", color: "#000000", fontSize: "2.8rem" }}
            >
              <i className="fas fa-times" />
            </Typography>
          </ListItem>
          <NavLink exact to="/">
            <ListItem
              button
              
              value="Home"
              onClick={e => {
                console.log(`The home button was clicked!`);
              }}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#000000" }}
              >
                Home
              </Typography>
            </ListItem>
          </NavLink>
          <NavLink exact to="/discover">
            <ListItem
              button
              
              value="Search"
              onClick={e => {
                console.log(`The search button was clicked!`);
              }}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#000000" }}
              >
                Search
              </Typography>
            </ListItem>
          </NavLink>
          
        </List>
        <Divider />
        {!(this.state.isLoggedIn || renderLoggedIn) && (
          <List className="login-list">
            <ListItem
              button
              
              value="Login/Register"
              onClick={() => login()}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#000000" }}
              >
                Login/Register
              </Typography>
            </ListItem>
          </List>
        )}
        <Divider />
        {(this.state.isLoggedIn || renderLoggedIn) &&
          loggedInRole === "student" && (
            <List className="loggedIn-student-list">
              <NavLink exact to={`/student/profile/${this.props.id}`}>
                <ListItem
                  button
                  
                  value="My Profile"
                  onClick={e => {
                    console.log(`The my-profile button was clicked!`);
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ marginLeft: "20px", color: "#000000" }}
                  >
                    My Profile
                  </Typography>
                </ListItem>
              </NavLink>
              <NavLink exact to="/profile-quick-start">
                <ListItem
                  button
                  
                  value="Edit Profile"
                  onClick={e => {
                    console.log(`The edit-profile button was clicked!`);
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ marginLeft: "20px", color: "#000000" }}
                  >
                    Edit Profile
                  </Typography>
                </ListItem>
              </NavLink>
              <NavLink exact to="/student/new-project">
                <ListItem
                  button
                  
                  value="Add Project"
                  onClick={e => {
                    console.log(`The add-project button was clicked!`);
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ marginLeft: "20px", color: "#000000" }}
                  >
                    Add Project
                  </Typography>
                </ListItem>
              </NavLink>
              {this.props.location.pathname.match(
                /\/student\/project-view\/\d+/g
              ) ? (
                this.checkOwner(this.props.project_students) ? (
                  <div>
                    <NavLink
                      exact
                      to={`/student/edit-project/${this.props.project_id}`}
                    >
                      <ListItem
                        button
                        
                        value="Leave Project"
                        onClick={e => {
                          console.log(`The leave-project button was clicked!`);
                          return (
                            <LeaveProject project_id={this.props.project_id} />
                          );
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{ marginLeft: "20px", color: "#000000" }}
                        >
                          Leave Project
                        </Typography>
                      </ListItem>
                    </NavLink>
                    <NavLink
                      exact
                      to={`/student/edit-project/${this.props.project_id}`}
                    >
                      <ListItem
                        button
                        
                        value="Edit Project"
                        onClick={e => {
                          console.log(`The edit-project button was clicked!`);
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{ marginLeft: "20px", color: "#000000" }}
                        >
                          Edit Project
                        </Typography>
                      </ListItem>
                    </NavLink>
                  </div>
                ) : (
                  <ListItem
                    button
                    
                    value="Join Project"
                    onClick={e => {
                      console.log(`The join-project button was clicked!`);
                      return <JoinProject project_id={this.props.project_id} />;
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{ marginLeft: "20px", color: "#000000" }}
                    >
                      Join Project
                    </Typography>
                  </ListItem>
                )
              ) : null}
            </List>
          )}
        <Divider />
        {(this.state.isLoggedIn || renderLoggedIn) && loggedInRole === "staff" && (
          <List className="loggedIn-admin-list">
            <NavLink to="/admin/students-table">
              <ListItem
                button
                
                value="Students Table"
                onClick={e => {
                  console.log(`The students-table button was clicked!`);
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginLeft: "20px", color: "#000000" }}
                >
                  Students Table
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink to="/admin/projects-table">
              <ListItem
                button
                
                value="Projects Table"
                onClick={e => {
                  console.log(`The projects-table button was clicked!`);
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginLeft: "20px", color: "#000000" }}
                >
                  Projects Table
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink to="/admin/accounts-table">
              <ListItem
                button
                
                value="Accounts Table"
                onClick={e => {
                  console.log(`The accounts-table button was clicked!`);
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginLeft: "20px", color: "#000000" }}
                >
                  Accounts Table
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink to="/admin/tracks-table">
              <ListItem
                button
                
                value="Tracks Table"
                onClick={e => {
                  console.log(`The tracks-table button was clicked!`);
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginLeft: "20px", color: "#000000" }}
                >
                  Tracks Table
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink to="/admin/cohorts-table">
              <ListItem
                button
                
                value="Cohorts Table"
                onClick={e => {
                  console.log(`The cohorts-table button was clicked!`);
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginLeft: "20px", color: "#000000" }}
                >
                  Cohorts Table
                </Typography>
              </ListItem>
            </NavLink>
          </List>
        )}
        <Divider />
        {(this.state.isLoggedIn || renderLoggedIn) && (
          <List className="logout-list">
            <ListItem
              button
              
              value="Logout"
              onClick={() => logout()}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#bb1333" }}
              >
                Logout
              </Typography>
            </ListItem>
          </List>
        )}
      </div>
    );

    return (
      <div className="MobileNavBar">
        <Button onClick={this.toggleDrawer("right", true)}>
          <i
            className="fas fa-bars"
            style={{ fontSize: "3.5rem", color: "white" }}
          />
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          onOpen={this.toggleDrawer("right", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

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
  )(withStyles(styles)(SwipeableTemporaryDrawer))
);
