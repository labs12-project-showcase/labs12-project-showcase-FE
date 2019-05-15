import React from "react";
import { connect } from "react-redux";
import MaterialDatatable from "material-datatable";
import { fetchStudents, updateStudent } from "../adminActions.js";
import { Link } from "react-router-dom";
import GraduatedButton from "./StudentGraduatedButton";
import HiredButton from "./StudentHiredButton";
import EndorsedButton from "./StudentEndorsedButton";

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const column = [
      {
        name: "ID",
        field: "id",
        options: {
          filter: false,
          sort: false,
          display: false
        }
      },
      {
        name: "Name",
        field: "name",
        options: {
          filter: false,
          sort: true,
          customBodyRender: student => {
            return (
              <Link
                to={`/student/profile/${student.id}`}
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                {student.name}
              </Link>
            );
          },
          customValue: student => student.name,
          customSortValue: student => student.name
        }
      },
      {
        name: "Track",
        field: "track",
        filter: true,
        sort: true
      },
      {
        name: "Cohort",
        field: "cohort_name",
        filter: true,
        sort: true
      },
      {
        name: "Graduated",
        field: "graduated",
        options: {
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <GraduatedButton student={student} />;
          },
          customValue: student =>
            student.graduated
              .toString()
              .charAt(0)
              .toUpperCase() + student.graduated.toString().slice(1),
          customSortValue: student => Number(student.graduated)
        }
      },
      {
        name: "Hired",
        field: "hired",
        options: {
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <HiredButton student={student} />;
          },
          customValue: student =>
            student.hired
              .toString()
              .charAt(0)
              .toUpperCase() + student.hired.toString().slice(1),
          customSortValue: student => Number(student.hired)
        }
      },
      {
        name: "Endorsed",
        field: "endorsed",
        options: {
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <EndorsedButton student={student} />;
          },
          customValue: student =>
            student.approved
              .toString()
              .charAt(0)
              .toUpperCase() + student.approved.toString().slice(1),
          customSortValue: student => Number(student.approved)
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      selectableRows: false,
      showSelectedRowsToolbar: false,
      responsive: "stacked"
    };

    return (
      <div className="tableContainer">
        <MaterialDatatable
          title={"Students"}
          columns={column}
          data={this.props.students}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.admin.students
  };
};

export default connect(
  mapStateToProps,
  { fetchStudents, updateStudent }
)(StudentsTable);
