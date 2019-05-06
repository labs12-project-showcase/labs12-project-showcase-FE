import React from "react";
import { Link } from "react-router-dom";
import one from "../../assets/one.jpg";

const Cards = ({
  id,
  name,
  track,
  top_skills,
  skills,
  linkedin,
  twitter,
  github,
  desired_title,
  profile_pic,
  cards
}) => {
  const map = arr => arr.map(skill => <li key={skill}>{skill}</li>);
  return (
    <>
      <div className="cards">
        <div className="profile-pic">
          <img src={cards.profile_pic} alt="Profile" />
        </div>
        <div className="details">
          <h2>{cards.name}</h2>
          <h3>{cards.track}</h3>
          <p>Skills:</p>
          <ul>{map(cards.top_skills)}</ul>
          <br />
          <br />
          <div className="contact-links">
            <a href={cards.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href={cards.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={cards.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <Link to={`/student/profile/${cards.id}`}>
              <button className="prof-link">Profile &amp; Projects</button>
            </Link>
          </div>
        </div>
        <div className="projects-box">
          <h2>My top 3 projects</h2>
          {cards.top_projects.map(proj => (
            <Link
              key={proj.project_id}
              to={`/student/project-view/${proj.project_id}`}
              className="display-box"
            >
              <img src={one} alt="Project" />
              <h3>{proj.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
