import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import Routes from './config/Routes.js';

function App() {
	return (
		<div className="App">
			<Routes />
		</div>
	);
}

export default withRouter(App);
