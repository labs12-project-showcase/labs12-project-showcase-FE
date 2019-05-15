import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function TrackAddModal(props) {
  const { classes } = props;
  return (
    <div>
      <Fab
        variant="extended"
        color="secondary"
        aria-label="Delete"
        className={classes.fab}
      >
        <AddIcon className={classes.extendedIcon} />
        Add a Track
      </Fab>
    </div>
  );
}

TrackAddModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TrackAddModal);
