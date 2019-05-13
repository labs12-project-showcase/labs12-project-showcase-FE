import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchProjects } from '../adminActions.js';
import { Link } from "react-router-dom";


class TracksTable extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const column = [
      {
        name: "Track",
        field: "track",
        filter: true,
        sort: true,
      },
      {
        name: "Description",
        field: "short_description",
        filter: true,
        sort: true,
      },
    ]

    return (

      <div className="tableContainer">
        <MaterialDatatable
          title={"Admin Project Table"}
          columns={column}
          data={this.props.projects}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.admin.projects
  };
};

export default connect(mapStateToProps, { fetchProjects })(TracksTable);