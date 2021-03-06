import React from "react";
import { withRouter, Redirect } from "react-router-dom";
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
import ContactForm from "../contactForm/ContactForm";
import Loading from '../../utils/Loading.js';

class StudentProfile extends React.Component {
  state = {
    fetchedNew: false,
    ready: false
  };

  componentDidMount() {
    console.log('component mounting');
    this.props.getData(this.props.match.params.id).then(() => this.setState({ready:true}));
  }

  componentDidUpdate(prevProps) {
    console.log('component updating');
    prevProps.match.params.id !== this.props.match.params.id &&
    this.props.getData(this.props.match.params.id).then(() => this.setState({ready:true}));
  }

  componentWillUnmount() {
    
  }

  updateFetched = () => {
    console.log('updating fetch');
    if (
      this.props.loggedInProfile &&
      this.props.loggedInProfile.id === Number(this.props.match.params.id) &&
      this.state.fetchedNew === false
    ) {
      this.props.getData().then(() => {
        this.setState({ fetchedNew: true });
      });
    }
  };

  render() {
    if (
      this.props.loggedInProfile &&
      this.props.loggedInProfile.id === Number(this.props.match.params.id) &&
      this.state.fetchedNew === false
    ) {
      this.updateFetched();
    }
    const {
      id,
      name,
      about,
      desired_locations,
      approved,
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
    const profilePicture =
      profile_pic ||
      "https://res.cloudinary.com/hirelambdastudents/image/upload/v1556814928/pictures/avatar.png";

    if (this.props.studentProfile.emptyReturn) {
      return <Redirect to="/404" />
    }
    if (this.state.ready === false) {
      return <Loading />
    }
    return (
      <div className="student-dashboard">
        {sameUser && !approved && <NotEndorsed />}
        {/* <EndorseButton profile_id={id} /> */}
        <header>
          <div className="profile-container">
            <div className="picture">
              <img src={profilePicture} alt="Profile" />
            </div>
            <div className="top-info">
              <div className="name-cont">
                <h1>{name}</h1>
                <h2>{track}</h2>
                <h3>{location}</h3>
              </div>
              <div className="badge">
                <a rel="noopener noreferrer" href={acclaim} target="_blank">
                  <img src={badge} alt="Lambda Badge" />
                </a>
              </div>

              <div className="social-links">
                <ContactForm student={this.props.studentProfile.profile} />
                {website && <a
                  className="portfolio-btn"
                  rel="noopener noreferrer"
                  href={website}
                  target="_blank"
                >
                  Portfolio
                </a>}
                <div className="social-media">
                  <Share studentId={id} name={name} />
                  {linkedin && <a rel="noopener noreferrer" href={linkedin} target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>}
                  {github && <a rel="noopener noreferrer" href={github} target="_blank">
                    <i className="fab fa-github" />
                  </a>}
                  {twitter && <a rel="noopener noreferrer" href={twitter} target="_blank">
                    <i className="fab fa-twitter" />
                  </a>}
                </div>
              </div>
            </div>
            <div className="header-boxes">
              <AboutMe about={about} />
              {endorsements !== undefined && endorsements.length > 0 && (
                <Endorsements endorsements={endorsements} />
              )}
            </div>
          </div>
        </header>
        <main>
          <Projects
            projects={projects || []}
            top_projects={top_projects || []}
          />

          <hr />
          <div className="status-skills">
            <Status
              cohort={cohort_name}
              desired_locations={desired_locations || []}
              desired_title={desired_title}
            />
            <Skills skills={skills || []} top_skills={top_skills || []} />
          </div>
          <hr />
          {sameUser && <Progress />}
        </main>
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