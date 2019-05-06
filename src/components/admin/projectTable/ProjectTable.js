// import React from 'react';
// import { connect } from 'react-redux';
// import MaterialDatatable from "material-datatable";



// // const AdminDashboard = props => {
// //   return (
// //     <div className="adminDashboard">
    
// //     </div>
// //   );
// // };

// class ProjectTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       data: [
//         {
//           "Title": "Jake",
//           "Type": "Full-Stack Web",
//           "Contributors": "Web 17",
//           "Approved": "No",
      
//         },
//         {
//           "Title": "Lowell",
//           "Type": "Full-Stack Web",
//           "Contributors": "Web 17",
//           "Approved": "No",
      
//         },
//         {
//           "Title": "Brandon",
//           "Type": "Full-Stack Web",
//           "Contributors": "Web 17",
//           "Approved": "No",
      
//         },
//         {
//           "Title": "Tico",
//           "Type": "Full-Stack Web",
//           "Contributors": "Web 17",
//           "Approved": "No",
      
//         },
//         {
//           "Title": "Ryan",
//           "Type": "Full-Stack Web",
//           "Contributors": "Web 17",
//           "Approved": "No",
      
//         },
//         {
//           "Title": "Julian",
//           "Type": "Full-Stack Web",
//           "Contributors": "Web 17",
//           "Approved": "No",
      
//         }
//       ]
//      }
//   }
//   render() { 
//     const columns = [
//       {
//         Header: "Title"
//       },
//       {
//         Header: "Type"
//       },
//       {
//         Header: "Contributors"
//       },
//       {
//         Header: "Approved"
//       },
//     ]
//     return ( 
//       <MaterialDatatable>
//         columns={columns}
//         data={this.state}
//       </MaterialDatatable>
//      );
//   }
// }
 
// export default ProjectTable;

// const mapStateToProps = state => {
//   return {
//     ...state.studentTable
//   };
// };

// export default connect(mapStateToProps)(StudentTable);

import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchStudents } from '../adminActions.js';
import Switch from "@material-ui/core/Switch"

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
        field: "Approved",
        options: {
          customBodyRender: value => {
            return (
              <Switch
                checked={value.active}
                onChange={async () => {
                  this.props.changeAdStatus(value, this.state.offer_id);
                }}
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