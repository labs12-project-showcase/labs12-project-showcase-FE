import {
  GET_PROFILE_DATA_FAILURE,
  GET_PROFILE_DATA_START,
  GET_PROFILE_DATA_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS
} from './profileqsActions.js';

const initialState = {
  dataSource: null,
  error: null,
  gettingProfileData: false,
  profileData: {
    about: '',
    acclaim: '',
    account_id: null,
    approved: false,
    cohort_id: null,
    cohort_name: '',
    desired_locations: [],
    desired_title: '',
    endorsements: [],
    exists: false,
    github: '',
    graduated: false,
    hired: false,
    hobbies: [],
    id: null,
    lat: null,
    linkedin: '',
    location: '',
    lon: null,
    name: '',
    profile_pic: '',
    projects: [],
    skills: [],
    top_projects: [],
    top_skills: [],
    track: '',
    track_id: null,
    twitter: '',
    website: ''
  },
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
        profileData: { ...state.profileData, ...action.payload }
      };
    case GET_PROFILE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingProfileData: false
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
