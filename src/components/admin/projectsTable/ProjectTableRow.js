import React from 'react'
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class ProjectTableRow extends React.Component {
    state = {  
        open: false
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.setState(state => ({ open: !state.open }));
    };

    render() { 
        return (  
            <List component="nav">
                <ListItem 
                  button 
                  onClick={e => this.handleClick(e)}
                >
                  <ListItemText inset primary="Team Members" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding >
                      {this.props.value.students.map((student) => {
                        return (
                          <ListItem key={student.name}>
                            <Link
                              to={`/student/profile/${student.student_id}`}
                            >
                              {student.name}
                            </Link>
                          </ListItem>
                        )
                      })}
                    </List>
                  </Collapse>
              </List>

        );
    }
}
 
export default ProjectTableRow;