import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchStudents } from '../adminActions.js';
import Switch from "@material-ui/core/Switch";
//import { Link } from "react-router-dom";

class ProjectTable extends React.Component {
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
        name: "Title",
        field: "title",
            filter: true,
            sort: true,
      },
      {
        name: "Type",
        field: "type",
            filter: true,
            sort: true,
      },
      {
        name: "Contributors",
        field: "contributors",
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
      },
    ]

    const data = [
              {
                title: "Jake",
                type: "Full-Stack Web",
                contributors: "Web 17",
                approved: "No",
            
              },
              {
                title: "Lowell",
                type: "Full-Stack Web",
                contributors: "Web 17",
                approved: "No",
            
              },
              {
                title: "Brandon",
                type: "Full-Stack Web",
                contributors: "Web 17",
                approved: "No",
            
              },
              {
                title: "Tico",
                type: "Full-Stack Web",
                contributors: "Web 17",
                approved: "No",
            
              },
              {
                title: "Ryan",
                type: "Full-Stack Web",
                contributors: "Web 17",
                approved: "No",
            
              },
              {
                title: "Julian",
                type: "Full-Stack Web",
                contributors: "Web 17",
                approved: "No",
            
              }
            ]
    
    return ( 
      <div className="tableContainer">
        <MaterialDatatable
          title={"Admin Project Table"}
          columns={column}
          data={data}
        />
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    ...state.projectTable
  };
};

export default connect(mapStateToProps, { fetchStudents })(ProjectTable);