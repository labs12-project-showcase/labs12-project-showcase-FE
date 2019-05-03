import React from "react";
import { Link } from "react-router-dom";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";

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
          </div>
        </div>
        <div className="projects-box">
          <h2>My top 3 projects</h2>

          <div className="display-box">
            <img src={one} alt="Project display" />
            <h3>Project Title</h3>
          </div>
          <div className="display-box">
            <img src={two} alt="Project display" />
            <h3>Project Title</h3>
          </div>
          <div className="display-box">
            <img src={three} alt="Project display" />
            <h3>Project Title</h3>
          </div>
          <Link to={`/student/profile/${cards.id}`}>
            <button className="prof-link">Profile &amp; Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
