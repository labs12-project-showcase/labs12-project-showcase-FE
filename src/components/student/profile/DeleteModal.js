import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../auth/authActions.js';
import { deleteStudent } from '../../student/profile/studentProfileActions.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

class DeleteModal extends React.Component {
	state = {
		open: false
	};

	handleOpen = e => {
		e.stopPropagation();
		this.setState({ open: true });
	};

	handleClose = e => {
		e.stopPropagation();
		this.setState({ open: false });
	};

	handleSubmit = e => {
		e.stopPropagation();
		this.props.deleteStudent();
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="sc-modal-buttons">
				<Button
					onClick={this.handleOpen}
					variant="outlined"
					color="secondary"
					classnames={classes.button}
				>
					<i class="fas fa-trash" />
					Delete Account
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
					onSubmit={this.handleSubmit}
					onClick={e => e.stopPropagation()}
				>
					<div
						style={{
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)'
						}}
						className={classes.paper}
					>
						<form
							onSubmit={this.handleSubmit}
							method="PUT"
							className="sc-modal-buttons"
						>
							<div className="sc-input">
								<label>Are you sure you want to delete your profile?</label>
							</div>
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								classnames={classes.button}
							>
								<i class="fas fa-check" />
								Delete Profile
							</Button>
							<Button
								onClick={this.handleClose}
								variant="outlined"
								color="secondary"
								classnames={classes.button}
							>
								<i class="fas fa-ban" />
								Cancel
							</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

DeleteModal.propTypes = {
	classes: PropTypes.object.isRequired
};

const connectedModal = connect(
	null,
	{ logout, deleteStudent }
)(DeleteModal);

export default withStyles(styles)(connectedModal);
