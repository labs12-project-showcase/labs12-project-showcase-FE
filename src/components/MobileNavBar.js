import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List className="public-list" zIndex="modal">
          <ListItem
            button
            style={{ margin: "10px 15px" }}
            value="Home"
            onClick={e => {
              console.log(`The home button was clicked!`);
            }}
          >
            <Typography variant="h4" style={{ marginLeft: "20px" }}>
              Home
            </Typography>
          </ListItem>
          <ListItem
            button
            style={{ margin: "10px 15px" }}
            value="Search"
            onClick={e => {
              console.log(`The search button was clicked!`);
            }}
          >
            <Typography variant="h4" style={{ marginLeft: "20px" }}>
              Search
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List className="login-list">
          <ListItem
            button
            style={{ margin: "10px 15px" }}
            value="Login/Register"
            onClick={e => {
              console.log(`The login/register button was clicked!`);
            }}
          >
            <Typography variant="h4" style={{ marginLeft: "20px" }}>
              Login/Register
            </Typography>
          </ListItem>
        </List>
        <Divider />
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
        <Divider />
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
        <Divider />
        <List className="logout-list">
          <ListItem
            button
            style={{ margin: "10px 15px" }}
            value="Logout"
            onClick={e => {
              console.log(`The logout button was clicked!`);
            }}
          >
            <Typography variant="h4" style={{ marginLeft: "20px" }}>
              Logout
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            style={{ margin: "10px 15px" }}
            value="Close Menu"
            onClick={e => {
              console.log(`The close-menu button was clicked!`);
            }}
          >
            <Typography variant="h4" style={{ marginLeft: "20px" }}>
              Close Menu
            </Typography>
          </ListItem>
        </List>
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

export default withStyles(styles)(SwipeableTemporaryDrawer);
