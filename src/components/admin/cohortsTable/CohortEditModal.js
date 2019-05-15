import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { updateCohort } from "../adminActions";


const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none'
	}
});

class CohortEditModal extends React.Component {
	state = {
		open: false,
		cohort_name: this.props.value.cohort_name
	};

	handleOpen = e => {
		e.stopPropagation();
		this.setState({ open: true });
	};

	handleClose = e => {
		this.setState({ open: false });
	};

	handleSubmit = e => {
		e.stopPropagation();
		e.preventDefault();
		this.props.updateCohort(this.props.value.id, { cohort_name: this.state.cohort_name })
		.then(this.handleClose);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="sc-modal">
				<Button
					onClick={this.handleOpen}
					variant="outlined"
					color="primary"
					classnames={classes.button}
				>
					Edit
					<EditIcon classnames={classes.rightIcon} />
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
					onSubmit={this.handleSubmit}
					onClick={e => e.stopPropagation()}
				>
					<div style={{
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)'
					}} className={classes.paper}>
						<form
							onSubmit={this.handleSubmit}
							method="PUT"
							className="sc-modal-buttons"
						>
							<div className="sc-input">
								<label>Updated Cohort Name: </label>
								<input 
								name='cohort_name'
								value={this.state.cohort_name}
								onChange={e => this.setState({ cohort_name: e.target.value })}
								onClick={e => e.stopPropagation()} type="text" />
							</div>
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								classnames={classes.button}
							>
								Update Cohort
								<CheckIcon classnames={classes.rightIcon} />
							</Button>
							<Button
								onClick={this.handleClose}
								variant="outlined"
								color="secondary"
								classnames={classes.button}
							>
								Cancel
								<CancelIcon classnames={classes.rightIcon} />
							</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

CohortEditModal.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		cohorts: state.admin.cohorts
	};
};

export default connect(
	mapStateToProps,
	{ updateCohort }
)(withStyles(styles)(CohortEditModal));
