import React from "react";
import { Link } from "react-router-dom";

const ProjectStudents = ({ students }) => {
  if (!students) {
    return null;
  }
  return (
    <React.Fragment>
      <h2>Who Built This?</h2>
      <div className="students-names">
        {students.map(student => (
          <Link
            to={`/student/profile/${student.student_id}`}
            key={student.name}
            className="s-link"
          >
            <div className="s-pic">
              <img src={student.profile_pic} alt={student.name} />
            </div>
            <p>{student.name}</p>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProjectStudents;
