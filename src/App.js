import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { withRouter } from "react-router-dom";

import { getProfileData } from "./components/student/profileqs/profileqsActions";
import { validateJwt } from "./config/utilities.js";
import Routes from "./config/Routes.js";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App({ dispatch, profile }) {
  useEffect(() => {
    const isLoggedIn = validateJwt();
    if (isLoggedIn && !profile.id) {
      dispatch(getProfileData());
    }
  }, [dispatch, profile.id]);
  return (
    <div className="main-container">
      <TopBar />
      <Routes />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default withRouter(connect(mapStateToProps)(App));
