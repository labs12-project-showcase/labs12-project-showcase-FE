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
    width: 240,
    marginTop: 80
  }
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
        <List className="public-list" zIndex="modal">
          <NavLink exact to="/">
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Home"
              onClick={e => {
                console.log(`The home button was clicked!`);
              }}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#1e50ee" }}
              >
                Home
              </Typography>
            </ListItem>
          </NavLink>
          <NavLink exact to="/discover">
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Search"
              onClick={e => {
                console.log(`The search button was clicked!`);
              }}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#1e50ee" }}
              >
                Search
              </Typography>
            </ListItem>
          </NavLink>
          <ListItem
            button
            style={{ margin: "10px 15px" }}
            value="Close Menu"
            onClick={e => {
              console.log(`The close-menu button was clicked!`);
            }}
          >
            <Typography
              variant="h4"
              style={{ marginLeft: "20px", color: "#bb1333" }}
            >
              Close Menu
            </Typography>
          </ListItem>
        </List>
        <Divider />
        {!(this.state.isLoggedIn || renderLoggedIn) && (
          <List className="login-list">
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Login/Register"
              onClick={() => login()}
            >
              <Typography
                variant="h4"
                style={{ marginLeft: "20px", color: "#1e50ee" }}
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
              <ListItem
                button
                style={{ margin: "10px 15px" }}
                value="My Profile"
                onClick={e => {
                  console.log(`The my-profile button was clicked!`);
                }}
              >
                <Typography variant="h4" style={{ marginLeft: "20px" }}>
                  My Profile
                </Typography>
              </ListItem>
              <ListItem
                button
                style={{ margin: "10px 15px" }}
                value="Edit Profile"
                onClick={e => {
                  console.log(`The edit-profile button was clicked!`);
                }}
              >
                <Typography variant="h4" style={{ marginLeft: "20px" }}>
                  Edit Profile
                </Typography>
              </ListItem>
              <ListItem
                button
                style={{ margin: "10px 15px" }}
                value="Add Project"
                onClick={e => {
                  console.log(`The add-project button was clicked!`);
                }}
              >
                <Typography variant="h4" style={{ marginLeft: "20px" }}>
                  Add Project
                </Typography>
              </ListItem>
              <ListItem
                button
                style={{ margin: "10px 15px" }}
                value="Edit Project"
                onClick={e => {
                  console.log(`The edit-project button was clicked!`);
                }}
              >
                <Typography variant="h4" style={{ marginLeft: "20px" }}>
                  Edit Project
                </Typography>
              </ListItem>
              <ListItem
                button
                style={{ margin: "10px 15px" }}
                value="Join Project"
                onClick={e => {
                  console.log(`The join-project button was clicked!`);
                }}
              >
                <Typography variant="h4" style={{ marginLeft: "20px" }}>
                  Join Project
                </Typography>
              </ListItem>
              <ListItem
                button
                style={{ margin: "10px 15px" }}
                value="Leave Project"
                onClick={e => {
                  console.log(`The leave-project button was clicked!`);
                }}
              >
                <Typography variant="h4" style={{ marginLeft: "20px" }}>
                  Leave Project
                </Typography>
              </ListItem>
            </List>
          )}
        <Divider />
        {(this.state.isLoggedIn || renderLoggedIn) && loggedInRole === "staff" && (
          <List className="loggedIn-admin-list">
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Students Table"
              onClick={e => {
                console.log(`The students-table button was clicked!`);
              }}
            >
              <Typography variant="h4" style={{ marginLeft: "20px" }}>
                Students Table
              </Typography>
            </ListItem>
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Projects Table"
              onClick={e => {
                console.log(`The projects-table button was clicked!`);
              }}
            >
              <Typography variant="h4" style={{ marginLeft: "20px" }}>
                Projects Table
              </Typography>
            </ListItem>
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Accounts Table"
              onClick={e => {
                console.log(`The accounts-table button was clicked!`);
              }}
            >
              <Typography variant="h4" style={{ marginLeft: "20px" }}>
                Accounts Table
              </Typography>
            </ListItem>
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Tracks Table"
              onClick={e => {
                console.log(`The tracks-table button was clicked!`);
              }}
            >
              <Typography variant="h4" style={{ marginLeft: "20px" }}>
                Tracks Table
              </Typography>
            </ListItem>
            <ListItem
              button
              style={{ margin: "10px 15px" }}
              value="Cohorts Table"
              onClick={e => {
                console.log(`The cohorts-table button was clicked!`);
              }}
            >
              <Typography variant="h4" style={{ marginLeft: "20px" }}>
                Cohorts Table
              </Typography>
            </ListItem>
          </List>
        )}
        <Divider />
        {(this.state.isLoggedIn || renderLoggedIn) && (
          <List className="logout-list">
            <ListItem
              button
              style={{ margin: "10px 15px" }}
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
