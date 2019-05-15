import React, { PureComponent } from "react";

export default class StudentInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.first_name} ${info.last_name}`;

    return (
      <div>
        <div>
          {`${displayName}`} | {`${info.city}, ${info.state}`}
        </div>
        <a
          target="_new"
          href={`https://halg-backend.herokuapp.com/api/students/profile/${displayName}`}
        >
          <img width={200} src={info.image} alt={displayName} />
        </a>
        <div>
          <p>{`Hi, I'm ${info.first_name}! Interested in hiring me?`}</p>
          <p>{`Click my profile picture above for more details.`}</p>
        </div>
      </div>
    );
  }
}
