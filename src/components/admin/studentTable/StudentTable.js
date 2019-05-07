import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchStudents } from '../adminActions.js';
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

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
    // const {
    //   name,
    //   track,
    //   cohort,
    // } = this.props.students

    const column = [
      {
        name: "Name",
        field: "name",
            filter: true,
            sort: true,
            options: {
              customBodyRender: value => {
               console.log('custom body render value', value);
               return (
                <Link
                 to={`/student/profile/${value.id}`}
                 onClick={ (e) => {
                  e.stopPropagation();
                 }}
                >{value.name}</Link>
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
              //console.log(value)
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
          customBodyRender: value => {
            return (
              //console.log(value)
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
          customBodyRender: value => {
            return (
              //console.log(value)
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
          },
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
          },
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
          },
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
          },
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
          },
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
        {console.log("testing the data", this.props.students)}
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
  console.log(state)
  return {
    //...state.projectTable
    students: state.admin.students
  };
};

export default connect(mapStateToProps, { fetchStudents })(StudentTable);