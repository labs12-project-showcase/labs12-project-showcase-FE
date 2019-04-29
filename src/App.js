import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import Routes from './config/Routes.js';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="main-container">
      <TopBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default withRouter(App);
