import axios from 'axios';
import { backendUrl } from '../../config/urls.js';
export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const UPDATE_FILTERED_CARDS = 'UPDATE_FILTERED_CARDS';
export const UPDATE_FILTERED_CARDS_FAILURE = 'UPDATE_FILTERED_CARDS_FAILURE';

export const homeData = () => dispatch => {
	console.log('fetching');
	axios
		.get(`${backendUrl}/api/students/cards`)
		.then(res => res.data)

		.then(cards =>
			dispatch({
				type: FETCH_CARDS,
				payload: cards
			})
		);
};
export const getFilteredCards = state => dispatch => {
	const latLon = `${state.location.value.lat && state.location.value.lon ? `&lat=${state.location.value.lat}&lon=${state.location.value.lon}` : ''}`;
	const queryString = `?tracks=${state.fullStack ? '1' : ''}${state.ios ? '2' : ''}${state.dataScience ? '3' : ''}${state.android ? '4' : ''}${state.uiux ? '5' : ''}&badge=${state.badge ? 'true' : 'false'}&within=${state.within}${latLon}`;
	console.log('query string', queryString);
	axios.get(`${backendUrl}/api/students/cards/filter${queryString}`)
	.then(res => {
		dispatch({
			type: UPDATE_FILTERED_CARDS,
			payload: res.data
		});
	})
	.catch(err => {
		console.log(err);
		dispatch({
			type: UPDATE_FILTERED_CARDS_FAILURE,
			payload: err
		});
	});
}