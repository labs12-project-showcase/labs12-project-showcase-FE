import React from 'react'
import { connect } from 'react-redux';
import Switch from "@material-ui/core/Switch";
import { updateStudent } from '../adminActions';

class StudentHiredButton extends React.Component {
    handleChange = (e) => {
        e.stopPropagation();
        this.props.updateStudent(this.props.student.id, {
            hired: !this.props.student.hired
        });
    }

    render() { 
        console.log(this.props.student);
        return (  
            <Switch
                onClick={this.handleChange}
                checked={this.props.student.hired}
                color="primary"
          />
        );
    }
}
 
export default connect(null, { updateStudent })(StudentHiredButton);

