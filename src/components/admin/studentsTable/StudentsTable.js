import React from "react";
import { connect } from "react-redux";
import MaterialDatatable from "material-datatable";
import { fetchStudents, updateStudent } from "../adminActions.js";
import { Link } from "react-router-dom";
import StudentGraduatedButton from "./StudentGraduatedButton";
import StudentHiredButton from "./StudentHiredButton";
import StudentEndorsedButton from "./StudentEndorsedButton";
import StudentHighlightedButton from "./StudentHighlightedButton";

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
          width: 100,
          headerNoWrap: true,
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
        options: {
          width: 100,
          filter: true,
          sort: true
        }
      },
      {
        name: "Cohort",
        field: "cohort_name",
        options: {
          width: 100,
          filter: true,
          sort: true,
          print: false,
          download: false
        }
      },
      {
        name: "Highlighted",
        field: "highlighted",
        options: {
          width: 130,
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <StudentHighlightedButton student={student} />;
          },
          customValue: student =>
            student.highlighted
              .toString()
              .charAt(0)
              .toUpperCase() + student.highlighted.toString().slice(1),
          customSortValue: student => Number(student.highlighted)
        }
      },
      {
        name: "Graduated",
        field: "graduated",
        options: {
          width: 130,
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <StudentGraduatedButton student={student} />;
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
          width: 50,
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <StudentHiredButton student={student} />;
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
          width: 140,
          filter: true,
          sort: true,
          customBodyRender: student => {
            return <StudentEndorsedButton student={student} />;
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
      resizableColumns: true,
      selectableRows: false,
      showSelectedRowsToolbar: false,
      responsive: "scroll",
      print: true,
      download: false
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
