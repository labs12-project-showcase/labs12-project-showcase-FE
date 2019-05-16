import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { deleteCohort } from "../adminActions.js";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class CohortDeleteModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = e => {
    e.stopPropagation();
    this.setState({ open: true });
  };

  handleClose = e => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.deleteCohort(this.props.value.id).then(this.handleClose);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="sc-modal-buttons">
        <Button
          onClick={this.handleOpen}
          variant="outlined"
          color="secondary"
          className={classes.button}
        >
          <i className="fas fa-trash" />
          Delete
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
              method="DELETE"
              className="sc-modal-buttons"
            >
              <div className="sc-input">
                <label>Are you sure you want to delete this cohort?</label>
              </div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                <i className="fas fa-check" />
                Delete Cohort
              </Button>
              <Button
                onClick={this.handleClose}
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                <i className="fas fa-ban" />
                Cancel
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

CohortDeleteModal.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    cohorts: state.admin.cohorts
  };
};

export default connect(
  mapStateToProps,
  { deleteCohort }
)(withStyles(styles)(CohortDeleteModal));
