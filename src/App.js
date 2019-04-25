import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import Routes from './config/Routes.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<div className="main-container">
				<Routes />
			</div>
			<Footer />
		</>
	);
}

export default withRouter(App);
