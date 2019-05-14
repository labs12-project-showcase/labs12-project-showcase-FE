import React from "react";
import { connect } from "react-redux";
// import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import { updateTrack, getTracks } from "../adminActions.js";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class TrackEditModal extends React.Component {
  state = {
    open: false,
    name: this.props.value.name
  };

  handleOpen = e => {
    e.stopPropagation();
    this.setState({ open: true });
    console.log(this.props.value);
    console.log(this.state.name);
  };

  handleClose = e => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
	e.stopPropagation();
	e.preventDefault();
	this.props.updateTrack(this.props.value.id, { name: this.state.name })
	.then(this.handleClose);
  };

  render() {
	const { classes } = this.props;

    return (
      <div className="sc-modal">
        <Button
          onClick={this.handleOpen}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Edit
          <EditIcon className={classes.rightIcon} />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          onClick={e => e.stopPropagation()}
        >
          <div
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
            className={classes.paper}
          >
            <form
              onSubmit={this.handleSubmit}
              className="sc-modal-buttons"
            >
              <div className="sc-input">
                <label>Updated Track Name: </label>
                <input
                  onChange={e => this.setState({ name: e.target.value })}
                  onClick={e => e.stopPropagation()}
                  type="text"
                  name="track_name"
                  value={this.state.name}
                />
              </div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Update Track
                <CheckIcon className={classes.rightIcon} />
              </Button>
              <Button
                onClick={this.handleClose}
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Cancel
                <CancelIcon className={classes.rightIcon} />
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

TrackEditModal.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    tracks: state.admin.tracks,
    // classes: classNames
  };
};

const Something = withStyles(styles)(TrackEditModal);

export default connect(
  mapStateToProps,
  { updateTrack, getTracks }
)(Something);
