import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import CohortEditModal from "./CohortEditModal";
import CohortDeleteModal from "./CohortDeleteModal";

import {
  getCohorts,
  updateCohort,
  deleteCohort,
  addCohort
} from '../adminActions.js';


class CohortsTable extends React.Component {

  componentDidMount() {
    this.props.getCohorts();
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
      },
      {
        name: "",
        options: {
          customBodyRender: value => {
            return (
              <div className="modals-container">
                <CohortEditModal value={value} />
                <CohortDeleteModal value={value} />
              </div>
            );
          }
        }
      }
    ]

    const options = {
      filterType: "dropdown",
      selectableRows: false,
      showSelectedRowsToolbar: false,
      responsive: "stacked"
    };

    return (

      <div className="tableContainer">
        <MaterialDatatable
          title={"Admin Cohorts Table"}
          columns={column}
          data={this.props.cohorts}
          options={options}
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

export default connect(mapStateToProps, {
  getCohorts,
  updateCohort,
  deleteCohort,
  addCohort
})(CohortsTable);