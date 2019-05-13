import React from "react";

const ProjectLinkButton = ({ link, text, iClassName, className }) => {
  if (!link) {
    return null;
  }
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className={className}
      target="_blank"
    >
      {iClassName ? <i className={iClassName} /> : null}
      {text ? text : null}
    </a>
  );
};

export default ProjectLinkButton;
