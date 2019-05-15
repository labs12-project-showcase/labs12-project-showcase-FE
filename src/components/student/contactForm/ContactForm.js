import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";

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

class ContactForm extends React.Component {
  state = {
    open: false,
    email: {
      from: "<YourEmailHere@gmail.com>",
      subject: `An Interested User Found Your Profile on Lambda Showcase!`,
      text: `Hi, <student name>! 
	
		  I stumbled upon your profile on Lambda Showcase and I am very impressed with your work!
		  Can we schedule a time to chat? You can reach me at <YourEmailHere@gmail.com>.
	
		  Thanks,
		  <Your Name Here>
		  `
    }
  };

  sendEmail = _ => {
    const { email } = this.state;

    axios
      .post(
        `https://halg-backend.herokuapp.com/api/students/contact-me/${
          this.props.match.params.id
        }`,
        email
      )
      .then(res => {
        alert("It sent!");
      })
      .catch(() => {
        alert("It did not send");
      });
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
  };

  render() {
	const { email } = this.state;
    const { classes } = this.props;

    return (
      <div className="sc-modal-buttons">
		<div 
			onClick={this.handleOpen}
			className="contact-btn"
		>
            Contact Me
        </div>
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
              method="PUT"
              className="sc-modal-buttons"
            >
              <div className="sc-input">
                <label>Your Email Address: </label>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                  onClick={e => e.stopPropagation()}
                  type="text"
                />
              </div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                classnames={classes.button}
              >
                Send
                <CheckIcon classnames={classes.rightIcon} />
              </Button>
              <Button
                onClick={this.handleClose}
                variant="outlined"
                color="secondary"
                classnames={classes.button}
              >
                Cancel
                <CancelIcon classnames={classes.rightIcon} />
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ContactForm));
