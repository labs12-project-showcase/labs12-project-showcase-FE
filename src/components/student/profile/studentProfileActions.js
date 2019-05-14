import axios from 'axios';
import { logout } from '../../../auth/authActions.js';
import { backendUrl } from '../../../config/urls.js';

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const getData = id => dispatch => {
	const headers = {
		authorization: localStorage.getItem('backendToken')
	};
	axios
		.get(`${backendUrl}/api/students/profile/${id}`, {
			headers
		})
		.then(res => res.data)

		.then(profile =>
			dispatch({
				type: FETCH_PROFILE_SUCCESS,
				payload: profile
			})
		)
		.catch(err =>
			dispatch({
				type: FETCH_PROFILE_FAILURE,
				payload: err.res
			})
		);
};

export const deleteStudent = () => {
	const config = {
		headers: { authorization: localStorage.getItem('backendToken') }
	};
	axios.delete(`${backendUrl}/api/students/delete`, config)
	.then(res => {
		logout();
	})
	.catch(err => {
		console.log(err);
	})

}