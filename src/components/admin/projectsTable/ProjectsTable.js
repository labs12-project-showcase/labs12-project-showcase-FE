import React from "react";
import { connect } from "react-redux";
import MaterialDatatable from "material-datatable";
import { fetchProjects, deleteProject } from "../adminActions.js";
import { Link } from "react-router-dom";
import ProjectTableRow from "./ProjectTableRow";
import ProjectApprovedButton from "./ProjectApprovedButton.js";
import ProjectDeleteModal from "./ProjectDeleteModal";

class ProjectsTable extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const column = [
      {
        name: "Title",
        field: "name",
        options: {
          width: 350,
          filter: false,
          sort: true,
          customBodyRender: project => {
            return (
              <Link
                to={`/student/project-view/${project.id}`}
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                {project.name}
              </Link>
            );
          },
          customValue: project => project.name,
          customSortValue: project => project.name
        }
      },
      {
        name: "Description",
        field: "short_description",
        options: {
          width: 300,
          filter: false,
          sort: false
        }
      },
      {
        name: "Engineering Team",
        field: "students",
        options: {
          width: 275,
          filter: false,
          sort: false,
          customBodyRender: value => {
            return <ProjectTableRow value={value} />;
          }
        }
      },
      {
        name: "Approved",
        field: "approved",
        options: {
          width: 200,
          filter: true,
          sort: true,
          customBodyRender: project => {
            return <ProjectApprovedButton project={project} />;
          },
          customValue: project => project.approved.toString(),
          customSortValue: project => Number(project.approved)
        }
      },
      {
        name: "",
        options: {
          width: 150,
          filter: false,
          sort: false,
          customBodyRender: value => {
            return (
              <div className="modals-container">
                <ProjectDeleteModal className="modal" value={value} />
              </div>
            );
          }
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      resizableColumns: true,
      selectableRows: false,
      showSelectedRowsToolbar: false,
      responsive: "scroll",
      print: false,
      download: false
    };

    return (
      <div className="tableContainer">
        <MaterialDatatable
          title={"Projects"}
          columns={column}
          data={this.props.projects}
          options={options}
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

export default connect(
  mapStateToProps,
  { fetchProjects, deleteProject }
)(ProjectsTable);
