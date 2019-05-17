import React from "react";
import { withRouter } from "react-router-dom";
import { render } from "react-dom";
import ReactMapGL, {
  Marker,
  FullscreenControl,
  NavigationControl
} from "react-map-gl";

import StudentPin from "./student-pin";
import LocationSelect from "../location/LocationSelect";
import { reactSelectStyles } from "../../styles/ReactSelectStyles";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

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
      location: null,
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

  handleChange = location => {
    this.setState({ location });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(
      `/discover?lat=${this.state.location.value.lat}&lon=${
        this.state.location.value.lon
      }&location=${encodeURIComponent(this.state.location.label)}&within=50`
    );
  };

  render() {
    const { viewport } = this.state;
    return (
      <div className="react-map">
        <ReactMapGL
          {...viewport}
          // mapStyle="mapbox://styles/mapbox/dark-v10"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          scrollZoom={false}
          id="map"
        >
          {this.state.students.map(this._renderStudentMarker)}

          {/* {this._renderPopup()} */}

          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>

          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </ReactMapGL>
        <div className="map-overlay">
          <form onSubmit={this.handleSubmit}>
            <h2>Find students in your area</h2>
            <LocationSelect
              isClearable
              styles={reactSelectStyles}
              onChange={this.handleChange}
              fieldValue={this.state.location}
            />
            <button type="submit">Find students</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(MapboxMapPresentational);

export function renderToDom(container) {
  render(<MapboxMapPresentational />, container);
}
