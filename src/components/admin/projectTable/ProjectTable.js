import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchProjects } from '../adminActions.js';
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import ProjectTableRow from './ProjectTableRow';


class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

<<<<<<< HEAD
||||||| merged common ancestors


  //   handleChange(event) {
  //     //console.log(event.target.value);
  //     this.setState({
  //         approved: event.target.value
  //     })
  // }

  // checked = () => {
  //   projects.approved === true return checked = true
  // }

=======



>>>>>>> 09c7b5f5f2c72580f5a1dea89be4947324d3036e
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
        name: "Type",
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
          customBodyRender: studentValue => {
            return (
              <Switch
                onClick={(e) => { e.stopPropagation() }}
<<<<<<< HEAD
                checked={this.state.checkedApproved}
||||||| merged common ancestors
                checked={this.state.checkedApproved}
                // onChange={this.handleChange('checkedApproved')}
=======
>>>>>>> 09c7b5f5f2c72580f5a1dea89be4947324d3036e
                value="checkedApproved"
              />
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