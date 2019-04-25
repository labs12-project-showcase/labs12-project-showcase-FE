import React from 'react';
import { connect } from 'react-redux';

class StudentDashboard extends React.Component {
	render() {
		return <div className="studentDashboard" />;
	}
}

const mapStateToProps = state => {
	return {
		...state.studentDashboard
	};
};

export default connect(mapStateToProps)(StudentDashboard);
