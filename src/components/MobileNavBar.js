import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  list: {
    width: 240,
    marginTop: 75
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
        <List className="public-list">
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Home"
            onClick={e => {
              console.log(`The home button was clicked!`);
            }}
          >
            <i
              class="fas fa-home"
              style={{
                fontSize: "1.8rem",
                color: "blue"
              }}
            />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Search"
            onClick={e => {
              console.log(`The search button was clicked!`);
            }}
          >
            <i
              class="fas fa-search-location"
              style={{ fontSize: "1.8rem", color: "brown" }}
            />
            <ListItemText primary="Search" />
          </ListItem>
        </List>
        <Divider />
        <List className="login-list">
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Login/Register"
            onClick={e => {
              console.log(`The login/register button was clicked!`);
            }}
          >
            <i
              className="fas fa-sign-in-alt"
              style={{ fontSize: "1.8rem", color: "green" }}
            />
            <ListItemText primary="Login/Register" />
          </ListItem>
        </List>
        <Divider />
        <List className="loggedIn-student-list">
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="My Profile"
            onClick={e => {
              console.log(`The my-profile button was clicked!`);
            }}
          >
            <i
              class="fas fa-id-card"
              style={{ fontSize: "1.8rem", color: "teal" }}
            />
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Edit Profile"
            onClick={e => {
              console.log(`The edit-profile button was clicked!`);
            }}
          >
            <i
              class="fas fa-user-edit"
              style={{ fontSize: "1.8rem", color: "aqua" }}
            />
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Add Project"
            onClick={e => {
              console.log(`The add-project button was clicked!`);
            }}
          >
            <i
              class="fas fa-plus"
              style={{ fontSize: "1.8rem", color: "darkorange" }}
            />
            <ListItemText primary="Add Project" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Edit Project"
            onClick={e => {
              console.log(`The edit-project button was clicked!`);
            }}
          >
            <i
              class="fas fa-edit"
              style={{ fontSize: "1.8rem", color: "purple" }}
            />
            <ListItemText primary="Edit Project" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Join Project"
            onClick={e => {
              console.log(`The join-project button was clicked!`);
            }}
          >
            <i
              class="fas fa-user-plus"
              style={{ fontSize: "1.8rem", color: "light-blue" }}
            />
            <ListItemText primary="Join Project" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Leave Project"
            onClick={e => {
              console.log(`The leave-project button was clicked!`);
            }}
          >
            <i
              class="fas fa-user-minus"
              style={{ fontSize: "1.8rem", color: "darkred" }}
            />
            <ListItemText primary="Leave Project" />
          </ListItem>
        </List>
        <Divider />
        <List className="loggedIn-admin-list">
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Students Table"
            onClick={e => {
              console.log(`The students-table button was clicked!`);
            }}
          >
            <i
              class="fas fa-graduation-cap"
              style={{ fontSize: "1.8rem", color: "teal" }}
            />
            <ListItemText primary="Students Table" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Projects Table"
            onClick={e => {
              console.log(`The projects-table button was clicked!`);
            }}
          >
            <i
              class="fas fa-project-diagram"
              style={{ fontSize: "1.8rem", color: "aqua" }}
            />
            <ListItemText primary="Projects Table" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Accounts Table"
            onClick={e => {
              console.log(`The accounts-table button was clicked!`);
            }}
          >
            <i
              class="fas fa-align-left"
              style={{ fontSize: "1.8rem", color: "darkorange" }}
            />
            <ListItemText primary="Accounts Table" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Tracks Table"
            onClick={e => {
              console.log(`The tracks-table button was clicked!`);
            }}
          >
            <i
              class="fas fa-code"
              style={{ fontSize: "1.8rem", color: "purple" }}
            />
            <ListItemText primary="Tracks Table" />
          </ListItem>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Cohorts Table"
            onClick={e => {
              console.log(`The cohorts-table button was clicked!`);
            }}
          >
            <i
              class="fas fa-users"
              style={{ fontSize: "1.8rem", color: "light-blue" }}
            />
            <ListItemText primary="Cohorts Table" />
          </ListItem>
        </List>
        <Divider />
        <List className="logout-list">
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Logout"
            onClick={e => {
              console.log(`The logout button was clicked!`);
            }}
          >
            <i
              className="fas fa-sign-out-alt"
              style={{ fontSize: "1.8rem", color: "red" }}
            />
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            style={{ margin: "15px 20px" }}
            value="Close Menu"
            onClick={e => {
              console.log(`The close-menu button was clicked!`);
            }}
          >
            <i
              className="fas fa-window-close"
              style={{ fontSize: "1.8rem", color: "red" }}
            />
            <ListItemText primary="Close Menu" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
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
