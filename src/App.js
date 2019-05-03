import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { withRouter } from "react-router-dom";

import { getProfileData } from "./components/student/profileqs/profileqsActions";
import Routes from "./config/Routes.js";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App({ dispatch, profile }) {
  useEffect(() => {
    if (!profile.id) {
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
