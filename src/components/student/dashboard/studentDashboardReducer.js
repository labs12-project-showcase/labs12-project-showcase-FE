import {
	FETCH_PROFILE,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAILURE
} from './studentDashboardActions';

const initialState = {
	profile: [],
	error: null,
	isFetchingProfile: false
};

const studentDashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILE:
			return {
				...state,
				isFetchingProfile: true,
				profile: action.payload,
				error: null
			};
		case FETCH_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload,
				isFetchingProfile: false,
				error: null
			};
		case FETCH_PROFILE_FAILURE:
			return {
				...state,
				isFetchingProfile: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default studentDashboardReducer;
