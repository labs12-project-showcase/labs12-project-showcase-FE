import React from "react";

class TrackAddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button class="mdc-fab mdc-fab--extended">
        <span class="material-icons mdc-fab__icon">add</span>
        <span class="mdc-fab__label">Create</span>
      </button>
    );
  }
}

export default TrackAddButton;
