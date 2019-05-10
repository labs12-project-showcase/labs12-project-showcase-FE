import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchStudents, updateStudent } from '../adminActions.js';
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

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
              <Switch
              onClick= { (e) =>
              {e.stopPropagation()}
              }
              />
            );
          }
        }
      },
      {
        name: "Hired",
        field: "hired",
        options: {
          customBodyRender: student => {
            return (
              <Switch
              onClick= { (e) =>
              {e.stopPropagation()}
              }
              />
            );
          }
        }
      },
      {
        name: "Endorsed",
        field: "endorsed",
        options: {
          customBodyRender: student => {
            return (
              <Switch
              onClick= { (e) =>
              {e.stopPropagation()}
              }
              />
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