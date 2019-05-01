import {
	FETCH_PROJECT,
	FETCH_PROJECT_SUCCESS,
	FETCH_PROJECT_FAILURE
} from './projectActions';

const initialState = {
	project: [],
	error: null,
	isFetchingProject: false
};

const studentDashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROJECT:
			return {
				...state,
				isFetchingProject: true,
				Project: action.payload,
				error: null
			};
		case FETCH_PROJECT_SUCCESS:
			return {
				...state,
				Project: action.payload,
				isFetchingProject: false,
				error: null
			};
		case FETCH_PROJECT_FAILURE:
			return {
				...state,
				isFetchingProject: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default projectReducer;
