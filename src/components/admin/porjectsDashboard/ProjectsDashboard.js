import React from 'react';
import { connect } from 'react-redux';

class ProjectsDashboard extends React.Component {
	render() {
		return <div className="projectsDashboard" />;
	}
}

const mapStateToProps = state => {
	return {
		...state.projectsDashboard
	};
};

export default connect(mapStateToProps)(ProjectsDashboard);
