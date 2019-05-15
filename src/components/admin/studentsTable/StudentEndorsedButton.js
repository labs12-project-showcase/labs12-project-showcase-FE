import React from 'react'
import { connect } from 'react-redux';
import Switch from "@material-ui/core/Switch";
import { updateStudent } from '../adminActions';

class StudentEndorsedButton extends React.Component {
    handleChange = (e) => {
        e.stopPropagation();
        this.props.updateStudent(this.props.student.id, {
            approved: !this.props.student.approved
        });
    }

    render() { 
        return (  
            <Switch
                onClick={this.handleChange}
                checked={this.props.student.approved}
                color="primary"
          />
        );
    }
}
 
export default connect(null, { updateStudent })(StudentEndorsedButton);

