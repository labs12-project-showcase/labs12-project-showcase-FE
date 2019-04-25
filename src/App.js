import React from 'react';
import './App.scss';
import { withRouter } from 'react-router-dom';
import Auth from '../auth/Auth.js';
import Routes from './config/Routes.js';
import TopBar from './components/TopBar.js';

const auth = new Auth();

function App() {
  return (
    <div className="App">
      <TopBar auth={auth} />
      <Routes auth={auth} />
    </div>
  );
}

export default withRouter(App);
