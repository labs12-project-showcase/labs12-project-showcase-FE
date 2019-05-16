import React from "react";
import { withRouter } from "react-router-dom";
import { render } from "react-dom";

import ReactMapGL, { Marker } from "react-map-gl";

import StudentPin from "./student-pin";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

class MapboxMapPresentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: 39.788260590328576,
        longitude: -97.77255674948162,
        zoom: 4,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      students: this.props.mapData
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mapData !== this.props.mapData) {
      this.setState({ students: this.props.mapData });
    }
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderStudentMarker = (student, index) => {
    console.log(student.latitude);
    return (
      <Marker
        key={`marker-${index}`}
        longitude={parseFloat(student.longitude)}
        latitude={parseFloat(student.latitude)}
      >
        <StudentPin
          size={20}
          onClick={() => this.setState({ popupInfo: student })}
        />
      </Marker>
    );
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        // mapStyle="mapbox://styles/mapbox/dark-v10"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        scrollZoom={false}
        className="react-map"
        id="map"
      >
        {this.state.students.map(this._renderStudentMarker)}
      </ReactMapGL>
    );
  }
}

export default withRouter(MapboxMapPresentational);

export function renderToDom(container) {
  render(<MapboxMapPresentational />, container);
}
