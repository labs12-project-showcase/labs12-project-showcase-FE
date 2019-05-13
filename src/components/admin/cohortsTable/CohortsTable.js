import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchCohorts } from '../adminActions.js';
import { Link } from "react-router-dom";
// import CohortsTableRow from './CohortsTableRow';


class CohortsTable extends React.Component {

  componentDidMount() {
    this.props.fetchCohorts();
  }

  render() {
    const column = [
      {
        name: "Cohort",
        field: "cohort_name",
        filter: true,
        sort: true,
        options: {
          customBodyRender: value => {
            return (
              <p>{value.cohort_name}</p>
            );
          }
        }
      }
    ]

    return (

      <div className="tableContainer">
        <MaterialDatatable
          title={"Admin Cohorts Table"}
          columns={column}
          data={this.props.cohorts}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cohorts: state.admin.cohorts
  };
};

export default connect(mapStateToProps, { fetchCohorts })(CohortsTable);