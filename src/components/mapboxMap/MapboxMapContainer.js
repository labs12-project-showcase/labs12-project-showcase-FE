import React from "react";
import { connect } from "react-redux";
import { fetchMapData } from "./mapboxMapActions";
import MapboxMapPresentational from "./MapboxMapPresentational";

class MapboxMapContainer extends React.Component {
  async componentDidMount() {
    this.props.fetchMapData();
  }

  render() {
    return <MapboxMapPresentational mapData={this.props.mapData} />;
  }
}

const mapStateToProps = state => ({
  mapData: state.mapboxMap.mapData
});

export default connect(mapStateToProps, { fetchMapData })(MapboxMapContainer);
