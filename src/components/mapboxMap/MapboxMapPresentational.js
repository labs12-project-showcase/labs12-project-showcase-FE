import React from "react";
import { withRouter } from "react-router-dom";
import { render } from "react-dom";
import ReactMapGL, { Marker } from "react-map-gl";

import StudentPin from "./student-pin";
import LocationSelect from "../location/LocationSelect";
import { reactSelectStyles } from "../../styles/ReactSelectStyles";
import "mapbox-gl/src/css/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

class MapboxMapPresentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: 30.788260590328576,
        longitude: -97.77255674948162,
        zoom: 3.5,
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
          mapStyle="mapbox://styles/mapbox/dark-v10"
          // mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          scrollZoom={false}
          id="map"
        >
          {this.state.students.map(this._renderStudentMarker)}
        </ReactMapGL>
        <div className="map-overlay">
          <form onSubmit={this.handleSubmit}>
            <h2>
              <i className="fas fa-search-location" /> Find Engineers in Your
              Area
            </h2>
            <LocationSelect
              isClearable
              styles={reactSelectStyles}
              onChange={this.handleChange}
              fieldValue={this.state.location}
              placeholder="Type a U.S. city to search..."
            />
            <button type="submit">
              Start here <i className="fas fa-arrow-alt-circle-right" />
            </button>
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
