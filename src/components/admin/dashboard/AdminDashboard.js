import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";


const AdminDashboard = props => {
  return (
    <div className="adminDashboard">
    
    </div>
  );
};

 
export default AdminDashboard;

const mapStateToProps = state => {
  return {
    ...state.adminDashboard
  };
};

export default connect(mapStateToProps)(AdminDashboard);