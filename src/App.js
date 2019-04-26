import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import Auth from './auth/Auth.js';
import Routes from './config/Routes.js';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Home from './components/home/Home';

const auth = new Auth();

function App() {
  return (
    <div className="main-container">
      <TopBar auth={auth} />
      <Home />
      <Routes auth={auth} />
      <Footer />
    </div>
  );
}

export default withRouter(App);
