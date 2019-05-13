import React from "react";

const ProjectLeftHeader = ({ name, short_description, website, medium }) => {
  return (
    <div className="img-des">
      <h1>{name}</h1>
      <h2>{short_description}</h2>
      <a href={website} target="_blank" rel="noopener noreferrer">
        Try it out!
      </a>
      {medium ? (
        <a href={medium} target="_blank" rel="noopener noreferrer">
          Read the Story on M
        </a>
      ) : null}
    </div>
  );
};

export default ProjectLeftHeader;
