import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import EditIcon from "@material-ui/icons/Edit";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class AccountEditModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = (e) => {
    e.stopPropagation();
    this.setState({ open: true });
  };

  handleClose = (e) => {
    e.stopPropagation();
    this.setState({ open: false });
  };

  handleInputClick = (e) => {
    e.stopPropagation();
  }

  handleSubmit = (e) => {
    e.stopPropagation();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} variant="outlined" color="primary" classNames={classes.button}>
          Edit
          <EditIcon classNames={classes.rightIcon} />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <form onSubmit={this.handleSubmit} method="PUT">
              <div>
                <label>New Account Name: </label>
                <input onClick={this.handleInputClick} type="text"></input>
              </div>
              <div>
                <label>New Account Email: </label>
                <input onClick={this.handleInputClick} type="text"></input>
              </div>
              <div>
                <label>New Account Role: </label>
                <input onClick={this.handleInputClick} type="text"></input>
              </div>
              <button type="submit">Update Account</button>
              <button onClick={this.handleClose}>Cancel</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

AccountEditModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountEditModal);