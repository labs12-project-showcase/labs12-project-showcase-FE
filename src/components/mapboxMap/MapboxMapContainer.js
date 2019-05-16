import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchMapData } from "./mapboxMapActions";
import MapboxMapPresentational from "./MapboxMapPresentational";

class MapboxMapContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMapData();
  }

  render() {
    return <MapboxMapPresentational mapData={this.props.mapboxMap} />;
  }
}

const mapStateToProps = state => ({
  ...state,
  mapData: state.mapboxMap
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchMapData }
  )(MapboxMapContainer)
);
