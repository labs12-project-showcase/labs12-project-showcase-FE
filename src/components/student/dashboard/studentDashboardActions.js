import axios from 'axios';
export const FETCH_student = 'FETCH_student';
export const FETCH_student_SUCCESS = 'FETCH_student_SUCCESS';
export const FETCH_student_FAILURE = 'FETCH_student_FAILURE';

export const getData = () => dispatch => {
	console.log('fetching');
	axios
		.get(`https://halg-backend.herokuapp.com/api/students/profile`)
		.then(res => res.data)

		.then(student =>
			dispatch({
				type: FETCH_student,
				payload: student
			})
		);
};
