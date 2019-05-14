import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

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

class AccountDeleteModal extends React.Component {
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
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="sc-modal">
				<Button
					onClick={this.handleOpen}
					variant="outlined"
					color="secondary"
					classNames={classes.button}
				>
					Delete
					<DeleteIcon classNames={classes.rightIcon} />
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
					onSubmit={this.handleSubmit}
					onClick={e => e.stopPropagation()}
				>
					<div style={getModalStyle()} className={classes.paper}>
						<form
							onSubmit={this.handleSubmit}
							method="PUT"
							className="sc-modal-buttons"
						>
							<div className="sc-input">
								<label>Are you sure you want to delete this account?</label>
							</div>
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								classNames={classes.button}
							>
								Delete Account
								<CheckIcon classNames={classes.rightIcon} />
							</Button>
							<Button
								onClick={this.handleClose}
								variant="outlined"
								color="secondary"
								classNames={classes.button}
							>
								Cancel
								<CancelIcon classNames={classes.rightIcon} />
							</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

AccountDeleteModal.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountDeleteModal);
