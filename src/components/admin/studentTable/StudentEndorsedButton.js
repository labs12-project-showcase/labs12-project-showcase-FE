import React from 'react'
import { connect } from 'react-redux';
import Switch from "@material-ui/core/Switch";
import { updateStudent } from '../adminActions';

class StudentEndorsedButton extends React.Component {
    handleChange = (e) => {
        e.stopPropagation();
        this.props.updateStudent(this.props.student.id, {
            endorsed: !this.props.student.endorsed
        });
    }

    render() { 
        console.log(this.props.student);
        return (  
            <Switch
                onClick={this.handleChange}
                checked={this.props.student.endorsed}
                color="primary"
          />
        );
    }
}
 
export default connect(null, { updateStudent })(StudentEndorsedButton);

