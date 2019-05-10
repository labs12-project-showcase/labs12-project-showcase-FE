import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchStudents, updateStudent } from '../adminActions.js';
import { Link } from "react-router-dom";
import GraduatedButton from "./StudentGraduatedButton";
import HiredButton from './StudentHiredButton';
import EndorsedButton from './StudentEndorsedButton';

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
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
          display: false
        }
      },
      {
        name: "Name",
        field: "name",
            filter: true,
            sort: true,
            options: {
              customBodyRender: student => {
               return (
                <Link
                 to={`/student/profile/${student.id}`}
                 onClick={ (e) => {
                  e.stopPropagation();
                 }}
                >{student.name}</Link>
               );
              }
             }
      },
      {
        name: "Track",
        field: "track",
            filter: true,
            sort: true,
      },
      {
        name: "Cohort",
        field: "cohort_name",
            filter: true,
            sort: true,
      },
      {
        name: "Graduated",
        field: "graduated",
        options: {
          customBodyRender: value => {
            return (
              <GraduatedButton />
            );
          }
        }
      },
      {
        name: "Hired",
        field: "hired",
        options: {
          customBodyRender: value => {
            return (
              <HiredButton />
            );
          }
        }
      },
      {
        name: "Endorsed",
        field: "endorsed",
        options: {
          customBodyRender: value => {
            return (
              <EndorsedButton />
            );
          }
        }
      },
    ]
    
    return ( 
      <div className="tableContainer">
      <button><Link to={`/admin/project-table`}>Project Table</Link></button>
        <MaterialDatatable
          title={"Admin Student Table"}
          columns={column}
          data={this.props.students}
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

export default connect(mapStateToProps, { fetchStudents, updateStudent })(StudentTable);