import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import CohortsButtons from "./CohortsButtons";
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
                    <CohortsButtons />
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

export default connect(mapStateToProps, { 
    getCohorts,
    updateCohort,
    deleteCohort,
    addCohort 
})(CohortsTable);