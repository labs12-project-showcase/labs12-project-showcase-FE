import React from 'react';
import { connect } from 'react-redux';

class StudentDashboard extends React.Component {
	render() {
		return (
			<div className="studentDashboard">
				<div>Full Name</div>
				<div>Title</div>
				<div>Location</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state.studentDashboard
	};
};

export default connect(mapStateToProps)(StudentDashboard);
