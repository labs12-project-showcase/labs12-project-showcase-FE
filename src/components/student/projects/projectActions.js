import axios from 'axios';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';

export const getProjects = () => dispatch => {
	const headers = {
		authorization: localStorage.getItem('backendToken')
	};
	axios
		.get(`https://halg-backend.herokuapp.com/api/projects`, {
			headers
		})
		.then(res => res.data)

		.then(project =>
			dispatch({
				type: FETCH_PROJECT_SUCCESS,
				payload: project
			})
		)
		.catch(err =>
			dispatch({
				type: FETCH_PROJECT_FAILURE,
				payload: err.res
			})
		);
};
