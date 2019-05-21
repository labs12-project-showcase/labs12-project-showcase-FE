import React from "react";
import { connect } from "react-redux";
import Switch from "@material-ui/core/Switch";
import { updateStudent } from "../adminActions";

class StudentHighlightedButton extends React.Component {
  handleChange = e => {
    e.stopPropagation();
    this.props.updateStudent(this.props.student.id, {
      highlighted: !this.props.student.highlighted
    });
  };

  render() {
    return (
      <Switch
        onClick={this.handleChange}
        checked={this.props.student.highlighted}
        color="primary"
      />
    );
  }
}

export default connect(
  null,
  { updateStudent }
)(StudentHighlightedButton);
