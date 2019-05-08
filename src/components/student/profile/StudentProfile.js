import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "./studentProfileActions";
import badge from "../../../assets/lambda-badge.png";
import Projects from "../projectcards/ProjectCards";
import NotEndorsed from "../notEndorsed/NotEndorsed";
import AboutMe from "../aboutMe/AboutMe";
import Endorsements from "../endorsements/Endorsements";
import Share from "../share/Share";
import Status from "../status/Status";
import Skills from "../skills/Skills";
import Progress from "../progress/Progress";
import EndorseButton from "../endorsements/EndorseButton";

// yarn add react-id-swiper@latest swiper@latest

class StudentProfile extends React.Component {
  componentDidMount() {
    this.props.getData(this.props.match.params.id);
  }

  componentDidUpdate() {
    this.props.getData(this.props.match.params.id);
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
      website,
      acclaim,
      cohort_name,
      desired_title,
      projects,
      top_projects,
      track,
      profile_pic
    } = this.props.studentProfile.profile;

    const sameUser = id === this.props.loggedInProfile.id;

    return (
      <div className="student-dashboard">
        {sameUser && !endorsed && <NotEndorsed />}
        <header>
          <div className="profile-container">
            <div className="picture">
              <img src={profile_pic} alt="Profile" />
            </div>
            <div className="name-cont">
              <h1>{name}</h1>
              <h2>{track}</h2>
              <h3>
                <i className="fas fa-map-marker-alt" /> {location}
              </h3>
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
              <a
                className="portfolio-btn"
                rel="noopener noreferrer"
                href={website}
                target="_blank"
              >
                <i className="fas fa-briefcase" /> Portfolio
              </a>
              <EndorseButton profile_id={id} />
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
          <Endorsements endorsements={endorsements || []} />
          {sameUser && <Progress />}
          <hr />
          <div className="status-skills">
            <Status
              cohort={cohort_name}
              desired_locations={desired_locations || []}
              desired_title={desired_title}
            />
            <Skills skills={skills || []} top_skills={top_skills || []} />
          </div>
        </main>
        <Projects projects={projects || []} top_projects={top_projects || []} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  loggedInProfile: state.profile.profileData,
  studentProfile: state.studentProfile
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(StudentProfile)
);
