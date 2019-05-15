import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  state = {
    email: {
      from: "<YourEmailHere@gmail.com>",
      subject: `An Interested User Found Your Profile on Lambda Showcase!`,
      text: `Hi, <student name>! I stumbled upon your profile on Lambda Showcase and I am really impressed with you! Can we schedule a time to chat? You can reach me at <YourEmailHere@gmail.com>.`
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

  render() {
    const { email } = this.state;

    return (
      <div className="contact-form">
        <div className="contact">
          <h2> Send Message </h2>
          <br />
          <label>
            <span className="input-label"> Your Email Address </span>
          </label>

          <input
            value={email.from}
            name="email"
            onChange={e =>
              this.setState({ email: { ...email, from: e.target.value } })
            }
          />

          <label>
            <span className="input-label">Subject</span>
          </label>

          <input
            value={email.subject}
            name="subject"
            onChange={e =>
              this.setState({ email: { ...email, subject: e.target.value } })
            }
          />

          <label>
            <span className="input-label"> Message </span>
          </label>

          <textarea
            rows={3}
            value={email.text}
            name="text"
            onChange={e =>
              this.setState({ email: { ...email, text: e.target.value } })
            }
          />

          <button onClick={this.sendEmail}> Send Email </button>
        </div>
      </div>
    );
  }
}

export default ContactForm;
