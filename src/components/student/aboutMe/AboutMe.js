import React from "react";

const AboutMe = ({ about }) => {
  return (
    <div className="aboutMe">
      <h2>About Me</h2>
      <p>Info filled out about me!{about}</p>
    </div>
  );
};

export default AboutMe;
