import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
	state = {};

	componentDidMount() {
		this.fetchStudentInfo();
	}

	render() {
		return (
			<div>
				<img src={this.state.profile_pic} alt="Profile Pictuare" />
				{this.state.name}

				<h2>{this.state.track}</h2>
				<h3>Contact Me </h3>
				<a
					href={`${this.state.github}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github" />
				</a>
				<a
					href={`${this.state.linkedin}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-linkedin-in" />
				</a>
				<a
					href={`${this.state.twitter}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-twitter" />
				</a>
				<a
					href={`${this.state.website}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fas fa-globe-americas" />
				</a>
			</div>
		);
	}

	fetchStudentInfo = () => {
		axios
			.get(
				`https://halg-backend.herokuapp.com/api/students/cards/${
					this.props.home.match.params.name
				}`
			)
			.then(students => {
				this.setState({ ...students.data });
			})
			.catch(err => {
				console.log('the get students thingy failed', err);
			});
	};
}

export default withRouter(Profile);
