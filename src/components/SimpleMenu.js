import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
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
            style={{ fontSize: "4rem", color: "white" }}
          />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          style={{ zIndex: "100000" }}
        >
          <MenuItem onClick={this.handleClose}>Discover</MenuItem>
          <MenuItem onClick={this.handleClose}>Register/Sign In</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
