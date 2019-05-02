import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";



// const AdminDashboard = props => {
//   return (
//     <div className="adminDashboard">
    
//     </div>
//   );
// };

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  render() { 
    const columns = [
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
            filter: true,
            sort: true,
      },
      {
        name: "Hired",
        field: "hired",
            filter: true,
            sort: true,
      },
      {
        name: "Endorsed",
        field: "endorsed",
            filter: true,
            sort: true,
      }
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
      <MaterialDatatable>
        title={"Admin Student Table"}
        columns={columns}
        data={data}
      </MaterialDatatable>
     );
  }
}

const mapStateToProps = state => {
  return {
    ...state.projectTable
  };
};

export default connect(mapStateToProps)(StudentTable);