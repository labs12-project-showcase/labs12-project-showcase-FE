import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { 
    getAccounts,
    updateAccount,
    deleteAccount
} from '../adminActions.js';


class AccountsTable extends React.Component {

  componentDidMount() {
    this.props.getAccounts();
  }

  render() {
    const column = [
      {
        name: "Account",
        field: "name",
        filter: true,
        sort: true,
        options: {
          customBodyRender: value => {
            return (
              <p>{value.name}</p>
            );
          }
        }
      }
    ]

    return (

      <div className="tableContainer">
        <MaterialDatatable
          title={"Admin Accounts Table"}
          columns={column}
          data={this.props.accounts}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.admin.accounts
  };
};

export default connect(mapStateToProps, { 
    getAccounts,
    updateAccount,
    deleteAccount
})(AccountsTable);