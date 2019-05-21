import React from "react";
import { connect } from "react-redux";
import MaterialDatatable from "material-datatable";
import { getAccounts, updateAccount, deleteAccount } from "../adminActions.js";
import AccountEditModal from "./AccountEditModal";
import AccountDeleteModal from "./AccountDeleteModal";

class AccountsTable extends React.Component {
  componentDidMount() {
    this.props.getAccounts();
  }

  render() {
    const column = [
      {
        name: "Name",
        field: "name",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Email",
        field: "email",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Role",
        field: "role",
        options: {
          filter: true,
          sort: true,
          customBodyRender: account =>
            account.role
              .charAt(0)
              .toUpperCase() + account.role.slice(1)
        }
      },
      {
        name: "",
        options: {
          filter: false,
          sort: false,
          customBodyRender: value => {
            return (
              <div className="modals-container">
                <AccountEditModal className="modal" value={value} />
                <AccountDeleteModal className="modal" value={value} />
              </div>
            );
          }
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      selectableRows: false,
      showSelectedRowsToolbar: false,
      responsive: "stacked",
      print: false,
      download: false,
    };

    return (
      <div className="tableContainer">
        <MaterialDatatable
          title={"Accounts"}
          columns={column}
          data={this.props.accounts}
          options={options}
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

export default connect(
  mapStateToProps,
  {
    getAccounts,
    updateAccount,
    deleteAccount
  }
)(AccountsTable);
