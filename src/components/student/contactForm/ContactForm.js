import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
	state = {
		email: {
			from: '',
			topic: '',
			text: ''
		},
		id: this.props.id
	};

	// componentDidMount() {
	// 	this.props.getData(this.props.match.params.id);
	// }

	sendEmail = _ => {
		const id = {id};
		
		console.log('SHOW ME SOMETHING', id)
		const { email } = this.state;
		// fetch(`http://127.0.0.1:7000/send-email?recipient=${'jmaxt12@gmail.com'}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
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
						<span className="input-label"> From </span>
					</label>

					<input
						value={email.from}
						onChange={e =>
							this.setState({ email: { ...email, from: e.target.value } })
						}
						/>

					<label>
						<span className="input-label">Subject</span>
					</label>

					<input
						value={email.topic}
						onChange={e =>
							this.setState({ email: { ...email, topic: e.target.value } })
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
