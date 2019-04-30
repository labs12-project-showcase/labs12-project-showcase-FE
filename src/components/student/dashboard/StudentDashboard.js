import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "./studentDashboardActions";
import badge from "../../../assets/lambda-badge.png";
import tony from "../../../assets/tony.jpg";
import Projects from "../projectcards/ProjectCards";
import NotEndorsed from "../notEndorsed/NotEndorsed";
import AboutMe from "../aboutMe/AboutMe";
import Endorsements from "../endorsements/Endorsements";
import Share from "../share/Share";
import Status from "../status/Status";
import Skills from "../skills/Skills";

// yarn add react-id-swiper@latest swiper@latest

class StudentDashboard extends React.Component {
  componentDidMount() {
    this.props.getData();
    console.log("fetching", getData);
  }

  render() {
    const {
      id,
      name,
      about,
      desired_locations,
      endorsed,
      endorsements,
      skills,
      top_skills,
      location,
      linkedin,
      twitter,
      github,
      // website,
      acclaim,
      hobbies,
      cohort,
      desired_position,
      projects,
      top_projects
    } = this.props.studentDashboard.profile;

    return (
      <div className="student-dashboard">
        <div className="subNav">
          <nav>
            <NavLink exact to="/student/new-project">
              Add New Project
            </NavLink>
            <NavLink exact to="#">
              Edit Profile
            </NavLink>
          </nav>
        </div>
        {!endorsed && <NotEndorsed />}
        <header>
          <div className="profile-container">
            <div className="picture">
              <img src={tony} alt="Tony Stark" />
            </div>
            <div className="name-cont">
              <h1>{name}</h1>
              <h2>{desired_position}</h2>
              <h3>{location}</h3>
            </div>
            <div className="badge">
              <a rel="noopener noreferrer" href={acclaim} target="_blank">
                <img src={badge} alt="Lambda Badge" />
              </a>
              <div className="contact-btn">
                <Link to="/contact-me">Contact Me</Link>
                <Share studentId={id} name={name} />
              </div>
            </div>
            <div className="social-links">
              <a rel="noopener noreferrer" href={linkedin} target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
              <a rel="noopener noreferrer" href={github} target="_blank">
                <i className="fab fa-github" />
              </a>
              <a rel="noopener noreferrer" href={twitter} target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </header>
        <main>
          <AboutMe about={about} />
          <Endorsements endorsements={endorsements} />
          <hr />
          <Projects projects={projects} top_projects={top_projects} />
          <hr />
          <div className="status-skills">
            <Status
              cohort={cohort}
              desired_locations={desired_locations}
              desired_position={desired_position}
            />
            <Skills skills={skills} top_skills={top_skills} />
          </div>
          <hr />
          <div className="hobbies">
            <h2>Hobbies &amp; Interests</h2>
            <p>{hobbies}</p>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  studentDashboard: state.studentDashboard
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(StudentDashboard)
);
