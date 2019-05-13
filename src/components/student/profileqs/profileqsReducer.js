import {
  DELETE_PROFILE_PICTURE_FAILURE,
  DELETE_PROFILE_PICTURE_START,
  DELETE_PROFILE_PICTURE_SUCCESS,
  GET_PROFILE_DATA_FAILURE,
  GET_PROFILE_DATA_START,
  GET_PROFILE_DATA_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPLOAD_PROFILE_PICTURE_FAILURE,
  UPLOAD_PROFILE_PICTURE_START,
  UPLOAD_PROFILE_PICTURE_SUCCESS
} from "./profileqsActions.js";

const initialState = {
  dataSource: null,
  error: null,
  gettingProfileData: false,
  profileData: {
    about: "",
    acclaim: "",
    account_id: null,
    approved: false,
    cohort_id: null,
    cohort_options: [],
    cohort_name: "",
    desired_locations: [],
    desired_title: "",
    endorsements: [],
    exists: false,
    github: "",
    graduated: false,
    hired: false,
    hobbies: [],
    id: null,
    lat: null,
    linkedin: "",
    location: "",
    lon: null,
    name: "",
    profile_pic: "",
    projects: [],
    skills: [],
    top_projects: [],
    top_skills: [],
    track: "",
    track_id: null,
    track_options: [],
    twitter: "",
    website: ""
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
    ],
    top_projects [
    ],
    projects [
    ]
  }
*/

const profileqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PROFILE_PICTURE_START:
      return {
        ...state,
        error: null,
        updatingProfileData: true
      };
    case DELETE_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        error: null,
        profileData: {...state.profileData, profile_pic: ''},
        updatingProfileData: false
      };
    case DELETE_PROFILE_PICTURE_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProfileData: false
      };
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
        profileData: { ...state.profileData, ...action.payload },
        updatingProfileData: false
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProfileData: false
      };
    case UPLOAD_PROFILE_PICTURE_START:
      return {
        ...state,
        error: null,
        updatingProfileData: true
      };
    case UPLOAD_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        error: null,
        profileData: { ...state.profileData, ...action.payload },
        updatingProfileData: false
      };
    case UPLOAD_PROFILE_PICTURE_FAILURE:
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
