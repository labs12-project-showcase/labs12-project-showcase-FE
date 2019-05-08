import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProject } from "../projectqs/projectqsActions";
import ProjectSkills from "../projectSkills/ProjectSkills";
import NotApproved from "../notApproved/NotApproved";
import ProgressProject from "../progressProject/ProgressProject";

import project from "../../../assets/project-img.jpg";

const ProjectView = ({
  project: { projectData },
  dispatch,
  history,
  curAccount,
  match: {
    params: { id }
  }
}) => {
  useEffect(() => {
    dispatch(getProject(id));
  }, [id, dispatch]);

  return (
    <div className="project-view">
      {!projectData.approved ? <NotApproved /> : null}
      <header>
        <div className="img-des">
          <img src={project} alt="Project" />
          <div className="overlay" />
          <h1>{projectData.name}</h1>
          <h2>{projectData.short_description}</h2>
          <a
            href={projectData.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it out!
          </a>
          <a
            href={projectData.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Story on M
          </a>
        </div>
        <div className="media-display">
          <div className="big-gallery">
            <iframe
              title="project preview video"
              width="100%"
              height="350"
              src={projectData.youtube_url}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          {projectData.project_media && projectData.project_media.length
            ? projectData.project_media.slice(0, 3).map(media => (
                <div className="img-one" key={media}>
                  <img src={media} alt="Project" />
                </div>
              ))
            : null}
        </div>
      </header>
      <main>
        <div className="pitch-and-projectURL-container">
          <div className="sales-pitch">
            <h2>Customer Sales Pitch</h2>
            <p>{projectData.customer_pitch || "Please add customer pitch"}</p>
          </div>
          <div className="sales-pitch">
            <h2>Technical Sales Pitch</h2>
            <p>{projectData.tech_pitch || "Please add tech pitch"}</p>
          </div>
          <div className="project-urls-container">
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-chip"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href={projectData.fe_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Front End
            </a>
            <a
              href={projectData.be_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Back End
            </a>
            <a
              href={projectData.market_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Marketing
            </a>
            <a
              href={projectData.mobile_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mobile
            </a>
            <a
              href={projectData.design_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Design
            </a>
          </div>
        </div>
        {/* {sameUser && <Progress />} */}
        <ProgressProject />
        <hr />
        <h2>Who Built This?</h2>
        <div className="students-names">
          {projectData.students
            ? projectData.students.map(student => (
                <div key={student.name} className="s-link">
                  <img src={student.profile_pic} alt={student.name} />
                  <p>{student.name}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <hr />
        <div className="project-skills">
          <h2>Technical Architecture </h2>
          <div className="status-skills">
            <ProjectSkills projectSkills={projectData.project_skills} />
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    project: state.project,
    curAccount: state.profile.profileData.id
  };
};

export default withRouter(connect(mapStateToProps)(ProjectView));
