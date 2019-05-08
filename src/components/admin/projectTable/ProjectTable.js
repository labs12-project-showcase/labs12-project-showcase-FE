import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchProjects } from '../adminActions.js';
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }

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
               console.log('custom body render value', value);
               return (
                <Link
                 to={`/student/project-view/${value.id}`}
                 onClick={ (e) => {
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
        field: "student_ids",
            filter: true,
            sort: true,
      },
      {
        name: "Approved",
        field: "approved",
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
      }
    ]
    
    return ( 
      <div className="tableContainer">
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
    // ...state.projectTable,
    projects: state.admin.projects
  };
};

export default connect(mapStateToProps, { fetchProjects })(ProjectTable);