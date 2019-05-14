import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 16
  }
});

const handleClick = (e) => {
    e.stopPropagation();
}

function CohortsButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button onClick={handleClick} variant="outlined" color="primary" classNames={classes.button}>
        Edit
        <EditIcon classNames={classes.rightIcon} />
      </Button>
      <Button variant="outlined" color="secondary" classNames={classes.button}>
        Delete
        <DeleteIcon classNames={classes.rightIcon} />
      </Button>
    </div>
  );
}

CohortsButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CohortsButtons);


// import React from 'react';

// class CohortsButtons extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

//     handleClickEdit = (e) => {
//         e.stopPropagation();
//     }

//     handleClickDelete = (e) => {
//         e.stopPropagation();
//     }

//     render() { 
//         return ( 
//             <div>
//                 <button onClick={(e) => e.stopPropagation()}>Edit</button>
//                 <button onClick={this.handleClickDelete}>Delete</button>
//             </div>
//          );
//     }
// }
 
// export default CohortsButtons;