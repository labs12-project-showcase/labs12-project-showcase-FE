import React, { useState } from "react";
import {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon
} from "react-share";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Share = ({ studentId, name, about }) => {
  const [hide, toggleHide] = useState(true);
  const url = `https://lambdashowcase.netlify.com/student/profile/${studentId}`;
  about = "about string";
  return (
    <div className="share-wrapper">
      <Link
        className="share-btn"
        onClick={() => {
          toggleHide(!hide);
        }}
        to="#"
      >
        <i className="fas fa-share-alt" />
      </Link>
      <div className="share-links">
        <Fade when={!hide}>
          <div className="share-button">
            <LinkedinShareButton
              url={url}
              title={`Hire Lambda Students: ${name}`}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className="share-button">
            <TwitterShareButton
              url={url}
              title={`Hire Lambda Students: ${name}`}
              hashtags={["lambda", "developers", "hirelambda"]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="share-button">
            <EmailShareButton
              url={url}
              subject={`Hire Lambda Students: ${name}`}
              body="Check out this developer!"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Share;
