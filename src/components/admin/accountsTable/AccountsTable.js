import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { 
    getAccounts,
    updateAccount,
    deleteAccount
} from '../adminActions.js';
// import AccountEditButton from './AccountEditButton';
import AccountEditModal from './AccountEditModal';
import AccountDeleteModal from './AccountDeleteModal';


class AccountsTable extends React.Component {

  componentDidMount() {
    this.props.getAccounts();
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
        name: "Email",
        field: "email",
        filter: true,
        sort: true,
      },
      {
        name: "Role",
        field: "role",
        filter: true,
        sort: true,
      },
      {
        name: "",
        options: {
            customBodyRender: value => {
                return (
                  <div className="modals-container">
                    <AccountEditModal value={value} />
                    <AccountDeleteModal value={value} />
                  </div>
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