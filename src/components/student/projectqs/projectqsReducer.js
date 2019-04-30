import {
	GET_PROJECT_DATA_FAILURE,
	GET_PROJECT_DATA_START,
	GET_PROJECT_DATA_SUCCESS,
	UPDATE_PROJECT_FAILURE,
	UPDATE_PROJECT_START,
	UPDATE_PROJECT_SUCCESS
  } from './projectqsActions.js';
  
const initialState = {
	dataSource: null,
	error: null,
	gettingProjectData: false,
	projectData: {
		name: '',
		github: '',
		website: '',
		medium: '',
		customer_pitch: '',
		tech_pitch: '',
		approved: false
	},
		// projectData: {
		// 	project_title: props.projects.name || '',
		// 	project_type: 'Web App',
		// 	live_demo_url: props.projects.website || '',
		// 	medium_article_url: props.project.medium || '',
		// 	customer_sales_pitch: props.projects.customer_pitch || '',
		// 	technical_sales_pitch: props.projects.tech_pitch || '',
		// },
		updatingProjectData: false
  };
  
  const projectqsReducer = (state = initialState, action) => {
	switch (action.type) {
	  case GET_PROJECT_DATA_START:
		return {
		  ...state,
		  gettingProjectData: true
		};
	  case GET_PROJECT_DATA_SUCCESS:
		return {
		  ...state,
		  error: null,
		  gettingProjectData: false,
		  projectData: { ...state.projectData, ...action.payload }
		};
	  case GET_PROJECT_DATA_FAILURE:
		return {
		  ...state,
		  error: action.payload,
		  gettingProjectData: false
		};
	  case UPDATE_PROJECT_START:
		return {
		  ...state,
		  updatingProjectData: true
		};
	  case UPDATE_PROJECT_SUCCESS:
		return {
		  ...state,
		  error: null,
		  projectData: action.payload,
		  updatingProjectData: false
		};
	  case UPDATE_PROJECT_FAILURE:
		return {
		  ...state,
		  error: action.payload,
		  updatingProjectData: false
		};
	  default:
		return state;
	}
  };
  
  export default projectqsReducer;
  
