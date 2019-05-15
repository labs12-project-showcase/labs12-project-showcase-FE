import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { addTrack, getTracks } from '../adminActions.js';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	},
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none'
	}
});

class TrackAddModal extends React.Component {
	state = {
		open: false,
		name: ''
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
		this.props
			.addTrack({ name: this.state.name })
			.then(this.props.getTracks)
			.then(this.handleClose);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="sc-add-modal">
				<Fab
					onClick={this.handleOpen}
					variant="extended"
					color="secondary"
					aria-label="Delete"
					className={classes.fab}
				>
					<AddIcon className={classes.extendedIcon} />
					Add a Track
				</Fab>
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
						<form onSubmit={this.handleSubmit} className="sc-modal-buttons">
							<div className="sc-input">
								<label>New Track Name: </label>
								<input
									onChange={e => this.setState({ name: e.target.value })}
									onClick={e => e.stopPropagation()}
									type="text"
									name="name"
									value={this.state.name}
								/>
							</div>
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								className={classes.button}
								onClick={this.handleSubmit}
							>
								Create Track
								<CheckIcon className={classes.rightIcon} />
							</Button>
							<Button
								onClick={this.handleClose}
								variant="outlined"
								color="secondary"
								className={classes.button}
							>
								Cancel
								<CancelIcon className={classes.rightIcon} />
							</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

TrackAddModal.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		tracks: state.admin.tracks
	};
};

export default connect(
	mapStateToProps,
	{ addTrack, getTracks }
)(withStyles(styles)(TrackAddModal));
