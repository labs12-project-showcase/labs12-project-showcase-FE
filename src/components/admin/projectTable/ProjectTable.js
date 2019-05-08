import React from 'react';
import { connect } from 'react-redux';
import MaterialDatatable from "material-datatable";
import { fetchProjects } from '../adminActions.js';
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  //   handleChange(event) {
  //     //console.log(event.target.value);
  //     this.setState({
  //         approved: event.target.value
  //     })
  // }

  // checked = () => {
  //   projects.approved === true return checked = true
  // }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const column = [
      {
        name: "Title",
        field: "name",
        filter: true,
        sort: true,
        options: {
          customBodyRender: value => {
            return (
              <Link
                to={`/student/project-view/${value.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >{value.name}</Link>
            );
          }
        }
      },
      {
        name: "Type",
        field: "short_description",
        filter: true,
        sort: true,
      },
      {
        name: "Contributors",
        field: "contributors",
        filter: true,
        sort: true,
        options: {
          customBodyRender: value => {
            return (
              <List
                component="nav"
              >
                <ListItem button onClick={this.handleClick}>

                  <ListItemText inset primary="Contributors" />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem>
                      <ListItemText inset primary="Tico Theps" 
                      />
                      <Link
                to={`/student/profile/${value.id}`}
                
              >{value.contributors}</Link>
                    </ListItem>
                  </List>
                </Collapse>
              </List>

            );
          }
        }
      },
      {
        name: "Approved",
        field: "approved",
        options: {
          customBodyRender: studentValue => {
            return (
              <Switch
                onClick={(e) => { e.stopPropagation() }
                }
                checked={this.state.checkedApproved}
                // onChange={this.handleChange('checkedApproved')}
                value="checkedApproved"
              />
            );
          }
        }
      }
    ]

    return (
      <div className="tableContainer">
        {/* {console.log("approved??????", this.props.projects[0].approved)} */}
        <MaterialDatatable
          title={"Admin Project Table"}
          columns={column}
          data={this.props.projects}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...state.projectTable,
    projects: state.admin.projects
  };
};

export default connect(mapStateToProps, { fetchProjects })(ProjectTable);