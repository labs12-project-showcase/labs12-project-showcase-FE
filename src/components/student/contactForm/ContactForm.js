import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
	state = {
		email: {
			sender: '',
			subject: '',
			text: ''
		}
	};

	sendEmail = _ => {
		const id = 1;
		const { email } = this.state;
		// fetch(`http://127.0.0.1:7000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
		//   .catch(err => console.error(err))

		axios
			.post(
				`https://halg-backend.herokuapp.com/api/students/contact-me/${id}`,
				email
			)
			.then(res => {
				alert('It sent!');
			})
			.catch(() => {
				alert('It did not send');
			});
	};

	render() {
		const { email } = this.state;

		return (
			<div className="contact-form">
				<div className="contact">
					<h2> Send Message </h2>
					<br />
					{/* <label> Recipient </label>
          <br />
          <input value={email.recipient}
            onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
          <div/> */}
					<label>
						<span className="input-label"> Sender </span>
					</label>

					<input
						value={email.sender}
						onChange={e =>
							this.setState({ email: { ...email, sender: e.target.value } })
						}
					/>

					<label>
						<span className="input-label">Subject</span>
					</label>

					<input
						value={email.subject}
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

/* 
lambdashowcase.com/students/something id in url
prop => student.id
*/
export default ContactForm;
