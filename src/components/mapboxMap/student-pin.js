import React, { PureComponent } from "react";

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none"
};

export default class StudentPin extends PureComponent {
  render() {
    const { size = 20 } = this.props;

    return (
      <i
        className="fas fa-map-marker-alt"
        viewBox="0 0 24 24"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`,
          color: "#d00",
          fontSize: "25px"
        }}
      />
    );
  }
}
