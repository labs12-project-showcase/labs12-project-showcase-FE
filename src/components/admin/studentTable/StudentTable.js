import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchStudents } from '../adminActions.js';
import Switch from "@material-ui/core/Switch"

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }

  // handleChange = name => {
  //   this.setState({ [name]: event.target.checked })
  // }

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() { 
    const column = [
      {
        name: "Name",
        field: "name",
            filter: true,
            sort: true,
      },
      {
        name: "Track",
        field: "track",
            filter: true,
            sort: true,
      },
      {
        name: "Cohort",
        field: "cohort",
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
                checked={this.state.checked}
              />
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
              <Switch
              />
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
              <Switch
              />
            );
          }
        }
      },
    ]

    const data = [
        {
            name: "Jake",
            track: "Full-Stack Web",
            cohort: "Web 17",
            graduated: "No",
            hired: "No",
            endorsed: "No"
          },
          {
            name: "Lowell",
            track: "Full-Stack Web",
            cohort: "Web 17",
            graduated: "No",
            hired: "No",
            endorsed: "No"
          },
          {
            name: "Brandon",
            track: "Full-Stack Web",
            cohort: "Web 17",
            graduated: "No",
            hired: "No",
            endorsed: "No"
          },
          {
            name: "Tico",
            track: "Full-Stack Web",
            cohort: "Web 17",
            graduated: "No",
            hired: "No",
            endorsed: "No"
          },
          {
            name: "Ryan",
            track: "Full-Stack Web",
            cohort: "Web 17",
            graduated: "No",
            hired: "No",
            endorsed: "No"
          },
          {
            name: "Julian",
            track: "Full-Stack Web",
            cohort: "Web 17",
            graduated: "No",
            hired: "No",
            endorsed: "No"
          }
        ]
    
    return ( 
      <div className="tableContainer">
        <MaterialDatatable
          title={"Admin Student Table"}
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

export default connect(mapStateToProps, { fetchStudents })(StudentTable);