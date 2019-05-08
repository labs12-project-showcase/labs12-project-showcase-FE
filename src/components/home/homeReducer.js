import {
	FETCH_CARDS,
	FETCH_CARDS_SUCCESS,
	FETCH_CARDS_FAILURE,
	UPDATE_FILTERED_CARDS,
	UPDATE_FILTERED_CARDS_FAILURE
} from './homeActions';

const initialState = {
	cards: [],
	error: null,
	isFetchingCards: false
};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_FILTERED_CARDS:
			return {
				...state,
				cards: action.payload
			}
		case UPDATE_FILTERED_CARDS_FAILURE:
			return {
				...state,
				error: action.payload
			}
		case FETCH_CARDS:
			console.log('cardsReducer', state);
			return {
				...state,
				isFetchingCards: true,
				cards: action.payload,
				error: null
			};
		case FETCH_CARDS_SUCCESS:
			return {
				...state,
				cards: action.payload,
				isFetchingCards: false,
				error: null
			};
		case FETCH_CARDS_FAILURE:
			return {
				...state,
				isFetchingCards: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default homeReducer;
