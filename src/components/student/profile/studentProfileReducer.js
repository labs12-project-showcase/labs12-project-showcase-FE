import {
	FETCH_PROFILE,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAILURE
} from './studentProfileActions';

const initialState = {
	profile: [],
	error: null,
	isFetchingProfile: false,
	emptyReturn: false
};

const studentProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILE:
			return {
				...state,
				isFetchingProfile: true,
				profile: action.payload,
				error: null
			};
		case FETCH_PROFILE_SUCCESS:
			const p = action.payload;
			if (action.payload && Object.keys(p).length === 4 && p.desired_locations.length === 0 && p.endorsements.length === 0 && p.projects.length === 0 && p.top_projects.length === 0) {
				return {
					...state,
					emptyReturn: true
				}
			} else {
				return {
					...state,
					profile: action.payload,
					isFetchingProfile: false,
					emptyReturn: false,
					error: null
				};
			}

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

export default studentProfileReducer;