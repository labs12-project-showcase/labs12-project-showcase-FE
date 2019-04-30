import {
  GET_PROFILE_DATA_FAILURE,
  GET_PROFILE_DATA_START,
  GET_PROFILE_DATA_SUCCESS,
  GET_SOCIAL_DATA_FAILURE,
  GET_SOCIAL_DATA_START,
  GET_SOCIAL_DATA_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS
} from './profileqsActions.js';

const initialState = {
  dataSource: null,
  error: null,
  gettingProfileData: false,
  profileData: {
		acclaim: '',
    desired_title: '',
    github: '',
    linkedin: '',
    location: '',
    name: '',
    website: '',
    about: '',
    twitter: ''
  },
	gettingSocialData: false,
  updatingProfileData: false
};

/* 
      Info {
        account {
          name
        }
        student {
        }
        hobbies [
        ]
        top_skills [
        ]
        skills [
        ]
        desired_locations [
        ]
      }
    */

const profileqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA_START:
      return {
        ...state,
        gettingProfileData: true
      };
    case GET_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        gettingProfileData: false,
        profileData: action.payload
      };
    case GET_PROFILE_DATA_FAILURE:
      return {
				...state,
				error: action.payload,
				gettingProfileData: false
      };
    case GET_SOCIAL_DATA_START:
      return {
				...state,
				gettingSocialData: true
      };
    case GET_SOCIAL_DATA_SUCCESS:
      return {
				...state,
				error: null,
				gettingSocialData: false,
				profileData: action.payload
      };
    case GET_SOCIAL_DATA_FAILURE:
      return {
				...state,
				error: action.payload,
				gettingSocialData: false
      };
    case UPDATE_PROFILE_START:
      return {
				...state,
				updatingProfileData: true
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
				...state,
				error: null,
				profileData: action.payload,
				updatingProfileData: false
      };
    case UPDATE_PROFILE_FAILURE:
      return {
				...state,
				error: action.payload,
				updatingProfileData: false
      };
    default:
      return state;
  }
};

export default profileqsReducer;
