import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import { getData } from "../profile/studentProfileActions";

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
      from: "<YOUR_EMAIL_HERE>@gmail.com",
      subject: "A Lambda Showcase User is Interested in you!",
      text: `Hi!
        I came across your student profile on the Lambda Showcase Web App. I'm very impressed with your projects and skills! Let's schedule a time to chat about your future with us! You can reach me at <YOUR_EMAIL_HERE>@gmail.com.
                
I look forward to speaking with you soon!

Sincerely,
<YOUR_NAME_HERE>`
    }
  };

  sendEmail = _ => {
    const { email } = this.state;

    axios
      .post(
        `https://halg-backend.herokuapp.com/api/students/contact-me/${
          this.props.student.id
        }`,
        email
      )
      .then(res => {
        alert(
          `Your message was sent successfully to ${this.props.student.name}!`
        );
        this.handleClose();
      })
      .catch(err => {
        console.log(err);
        alert(
          `Sorry, but something went wrong while trying to send your message to ${
            this.props.student.name
          }! Please try again.`
        );
      });
  };

  handleInputChange = e => {
    e.stopPropagation();
    this.setState({
      email: {
        ...this.state.email,
        [e.target.name]: e.target.value
      }
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
    this.sendEmail();
  };

  render() {
    // console.log(this.props.student.id);
    const { email } = this.state;
    const { classes } = this.props;

    return (
      <div className="sc-modal-buttons">
        <div onClick={this.handleOpen} className="contact-btn">
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
              top: "55vh",
              left: "50vw",
              transform: "translate(-50%, -50%)",
              width: "80vw",
              height: "75vh"
            }}
            className={classes.paper}
          >
            <form
              onSubmit={this.handleSubmit}
              method="POST"
              className="sc-modal-buttons contact-form"
            >
              <div className="contact-form-header-container">
                <h2 className="contact-form-header-message">
                  Send a Message to {this.props.student.name}!
                </h2>
              </div>

              <div className="sc-input input-div">
                <label className="email-label">Your Email Address:</label>
                <input
                  className="email-input"
                  name="from"
                  value={email.from}
                  onChange={this.handleInputChange}
                  onClick={e => e.stopPropagation()}
                  type="email"
                  required
                />
              </div>
              <div className="sc-input input-div">
                <label className="subject-label">Subject:</label>
                <input
                  className="subject-input"
                  name="subject"
                  value={email.subject}
                  onChange={this.handleInputChange}
                  onClick={e => e.stopPropagation()}
                  type="text"
                  required
                />
              </div>
              <div className="sc-input input-div">
                <label className="message-label">Message:</label>
                <textarea
                  className="message-input input-div"
                  name="text"
                  value={email.text}
                  onChange={this.handleInputChange}
                  onClick={e => e.stopPropagation()}
                  type="text"
                  required
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

export default connect(
  mapStateToProps,
  { getData }
)(withStyles(styles)(ContactForm));
