import axios from 'axios';
export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const homeData = () => dispatch => {
	console.log('fetching');
	axios
		.get(`https://halg-backend.herokuapp.com/api/students/cards`)
		.then(res => res.data)

		.then(cards =>
			dispatch({
				type: FETCH_CARDS,
				payload: cards
			})
		);
};
