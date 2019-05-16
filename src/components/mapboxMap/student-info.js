import React, { PureComponent } from "react";
import { backendUrl } from "../../config/urls.js";

export default class StudentInfo extends PureComponent {
  render() {
    const { student_info } = this.props.mapboxMap;
    const student_name = student_info.name;
    const student_id = student_info.id;
    const student_image = student_info.profile_pic;

    return (
      <div>
        <div>
          {`${student_name}`} | {`${student_info.location}`}
        </div>
        <a
          target="_new"
          href={`${backendUrl}/api/students/profile/${student_id}`}
        >
          <img width={200} src={student_image} alt={student_name} />
        </a>
        <div>
          <p>{`Hi, I'm ${student_name}! Interested in hiring me?`}</p>
          <p>{`Click my profile picture above for more details.`}</p>
        </div>
      </div>
    );
  }
}
