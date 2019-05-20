import React from "react";
import axios from "axios";
import axiosAuth from "../../../auth/axiosAuth.js";
import { backendUrl } from "../../../config/urls.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { deleteProject } from "../adminActions.js";

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

class ProjectDeleteModal extends React.Component {
  signal = axios.CancelToken.source();

  state = {
    isDeleting: false,
    project: {},
    open: false
  };

  componentDidMount() {
    this.onDeleteProject();
  }

  componentWillUnmount() {
    this.signal.cancel("API is being canceled");
  }

  onDeleteProject = async () => {
    try {
      this.setState({ isDeleting: true });
      const response = await axiosAuth().get(
        `${backendUrl}/api/admin/projects`,
        {
          cancelToken: this.signal.token
        }
      );
      this.setState({ project: response.data, isDeleting: true });
    } catch (err) {
      if (axiosAuth().isCancel(err)) {
        console.log("Error: ", err.message); // => prints: Api is being canceled
      } else {
        this.setState({ isDeleting: false });
      }
    }
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
    this.props.deleteProject(this.props.value.id).then(this.handleClose);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="sc-modal sc-modal-buttons">
        <Button
          onClick={this.handleOpen}
          variant="outlined"
          color="primary"
          classnames={classes.button}
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
                <label>Are you sure you want to delete this project?</label>
              </div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                classnames={classes.button}
              >
                <i className="fas fa-check" />
                Delete Project
              </Button>
              <Button
                onClick={this.handleClose}
                variant="outlined"
                color="secondary"
                classnames={classes.button}
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

ProjectDeleteModal.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    projects: state.admin.projects
  };
};

export default connect(
  mapStateToProps,
  { deleteProject }
)(withStyles(styles)(ProjectDeleteModal));
