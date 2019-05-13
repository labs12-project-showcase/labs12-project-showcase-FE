import React from "react";

const NotApproved = ({ approved }) => {
  if (approved) {
    return null;
  }
  return (
    <div className="approved-banner">
      A career coach has not reviewed your project yet. Your project will not be
      public until it has been approved.
    </div>
  );
};

export default NotApproved;
