import React from 'react'
import { connect } from 'react-redux';
import Switch from "@material-ui/core/Switch";
import { updateStudent } from '../adminActions';

class StudentGraduatedButton extends React.Component {
    handleChange = (e) => {
        e.stopPropagation();
        this.props.updateStudent(this.props.student.id, {
            graduated: !this.props.student.graduated
        });
    }

    render() { 
        return (  
            <Switch
                onClick={this.handleChange}
                checked={this.props.student.graduated}
                color="primary"
          />
        );
    }
}
 
export default connect(null, { updateStudent })(StudentGraduatedButton);

