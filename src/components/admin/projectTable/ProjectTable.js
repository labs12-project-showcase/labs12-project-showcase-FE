import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchProjects } from '../adminActions.js';
import { Link } from "react-router-dom";
import ProjectTableRow from './ProjectTableRow';
import ProjectApprovedButton from './ProjectApprovedButton.js';


class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const column = [
      {
        name: "Title",
        field: "name",
        filter: true,
        sort: true,
        options: {
          customBodyRender: value => {
            return (
              <Link
                to={`/student/project-view/${value.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >{value.name}</Link>
            );
          }
        }
      },
      {
        name: "Description",
        field: "short_description",
        filter: true,
        sort: true,
      },
      {
        name: "Contributors",
        field: "students",
        filter: true,
        sort: true,
        options: {
          customBodyRender: value => {
            return (
              <ProjectTableRow value={value} />
            );
          }
        }
      },
      {
        name: "Approved",
        field: "approved",
        options: {
          customBodyRender: project => {
            return (
              <ProjectApprovedButton project={project} />
            );
          }
        }
      }
    ]

    return (

      <div className="tableContainer">
      <button><Link to={`/admin/student-table`}>Student Table</Link></button>
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

export default connect(mapStateToProps, { fetchProjects })(ProjectTable);