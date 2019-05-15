import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { updateAccount } from "../adminActions";

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

class AccountEditModal extends React.Component {
	state = {
		open: false,
		name: this.props.value.name,
		role_id: this.props.value.role_id
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
		this.props.updateAccount(this.props.value.id, {
			name: this.state.name,
			role_id: this.state.role_id
		})
			.then(this.handleClose);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="sc-modal-buttons">
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
								<label>Updated Name: </label>
								<input
									name='name'
									value={this.state.name}
									onChange={e => this.setState({ name: e.target.value })}
									onClick={e => e.stopPropagation()} type="text" />
							</div>
							<div className="sc-input">
								<label>Updated Role: </label>
								<select
								name='role_id'
								onChange={e => this.setState({role_id: e.target.value})}
								value={this.state.role_id}>
									{this.props.value.role_options.map(option => {
										return (<option value={option.role_id}>
											{option.role
												.charAt(0)
												.toUpperCase() + option.role.slice(1)
											}</option>)
									})}
								</select>
							</div>
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								classnames={classes.button}
							>
								Update Account
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

AccountEditModal.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		accounts: state.admin.accounts
	};
};

export default connect(
	mapStateToProps,
	{ updateAccount }
)(withStyles(styles)(AccountEditModal));











// class ContactForm extends React.Component {
//   render() {
    

//     return (
    //   <div className="contact-form">
    //     <div className="contact">
    //       <h2> Send Message </h2>
    //       <br />
    //       <label>
    //         <span className="input-label"> Your Email Address </span>
    //       </label>

    //       <input
    //         value={email.from}
    //         name="email"
    //         onChange={e =>
    //           this.setState({ email: { ...email, from: e.target.value } })
    //         }
    //       />

    //       <label>
    //         <span className="input-label">Subject</span>
    //       </label>

    //       <input
    //         value={email.subject}
    //         name="subject"
    //         onChange={e =>
    //           this.setState({ email: { ...email, subject: e.target.value } })
    //         }
    //       />

    //       <label>
    //         <span className="input-label"> Message </span>
    //       </label>

    //       <textarea
    //         rows={3}
    //         value={email.text}
    //         name="text"
    //         onChange={e =>
    //           this.setState({ email: { ...email, text: e.target.value } })
    //         }
    //       />

    //       <button onClick={this.sendEmail}> Send Email </button>
    //     </div>
    //   </div>
//     );
//   }
// }