import React from 'react'
import { connect } from 'react-redux';
import Switch from "@material-ui/core/Switch";
import { updateProject } from '../adminActions';

class ProjectApprovedButton extends React.Component {
    handleChange = (e) => {
        e.stopPropagation();
        this.props.updateProject(this.props.project.id, {
            approved: !this.props.project.approved
        });
    }

    render() { 
        return (  
            <Switch
                onClick={this.handleChange}
                checked={this.props.project.approved}
                color="primary"
          />
        );
    }
}
 
export default connect(null, { updateProject })(ProjectApprovedButton);

