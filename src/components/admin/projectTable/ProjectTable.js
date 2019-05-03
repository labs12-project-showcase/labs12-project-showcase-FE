import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";



// const AdminDashboard = props => {
//   return (
//     <div className="adminDashboard">
    
//     </div>
//   );
// };

class ProjectTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [
        {
          "Title": "Jake",
          "Type": "Full-Stack Web",
          "Contributors": "Web 17",
          "Approved": "No",
      
        },
        {
          "Title": "Lowell",
          "Type": "Full-Stack Web",
          "Contributors": "Web 17",
          "Approved": "No",
      
        },
        {
          "Title": "Brandon",
          "Type": "Full-Stack Web",
          "Contributors": "Web 17",
          "Approved": "No",
      
        },
        {
          "Title": "Tico",
          "Type": "Full-Stack Web",
          "Contributors": "Web 17",
          "Approved": "No",
      
        },
        {
          "Title": "Ryan",
          "Type": "Full-Stack Web",
          "Contributors": "Web 17",
          "Approved": "No",
      
        },
        {
          "Title": "Julian",
          "Type": "Full-Stack Web",
          "Contributors": "Web 17",
          "Approved": "No",
      
        }
      ]
     }
  }
  render() { 
    const columns = [
      {
        Header: "Title"
      },
      {
        Header: "Type"
      },
      {
        Header: "Contributors"
      },
      {
        Header: "Approved"
      },
    ]
    return ( 
      <MaterialDatatable>
        column={column}
        data={this.state}
      </MaterialDatatable>
     );
  }
}
 
export default ProjectTable;

const mapStateToProps = state => {
  return {
    ...state.studentTable
  };
};

export default connect(mapStateToProps)(StudentTable);