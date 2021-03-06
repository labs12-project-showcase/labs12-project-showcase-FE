import {
  CLEAR_PROJECT_DATA,
  CREATE_PROJECT_FAILURE,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_START,
  UPDATE_PROJECT_SUCCESS,
  UPLOAD_PROJECT_PICTURE_START,
  UPLOAD_PROJECT_PICTURE_SUCCESS,
  UPLOAD_PROJECT_PICTURE_FAILURE,
  DELETE_PROJECT_PICTURE_START,
  DELETE_PROJECT_PICTURE_SUCCESS,
  DELETE_PROJECT_PICTURE_FAILURE
} from "./projectqsActions.js";

const initialState = {
  dataSource: null,
  error: null,
  gettingProjectData: false,
  updatingProjectData: false,
  projectData: {
    emptyReturn: false,
    name: "",
    github: "",
    fe_link: "",
    be_link: "",
    mobile_link: "",
    market_link: "",
    design_link: "",
    youtube_url: "",
    website: "",
    medium: "",
    short_description: "",
    customer_pitch: "",
    tech_pitch: "",
    students: [],
    project_media: [],
    project_skills: [],
    approved: false
  }
};

const projectqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_PROJECT_DATA:
      return {
        ...state,
        projectData: initialState.projectData
      };
    case CREATE_PROJECT_START:
      return {
        ...state,
        updatingProjectData: true
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        updatingProjectData: false,
        projectData: { ...state.projectData, ...action.payload }
      };
    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProjectData: false
      };
    case GET_PROJECT_START:
      return {
        ...state,
        gettingProjectData: true
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        gettingProjectData: false,
        projectData: { ...initialState.projectData, ...action.payload }
      };
    case GET_PROJECT_FAILURE:
      return {
        ...state,
        projectData: {emptyReturn: true},
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
        projectData: { ...state.projectData, ...action.payload },
        updatingProjectData: false
      };
    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProjectData: false
      };
    case UPLOAD_PROJECT_PICTURE_START:
      return {
        ...state,
        error: null,
        updatingProjectData: true
      };
    case UPLOAD_PROJECT_PICTURE_SUCCESS:
      return {
        ...state,
        error: null,
        profileData: { ...state.projectData, ...action.payload },
        updatingProjectData: false
      };
    case UPLOAD_PROJECT_PICTURE_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProjectData: false
      };
    case DELETE_PROJECT_PICTURE_START:
      return {
        ...state,
        error: null,
        updatingProjectData: true
      };
    case DELETE_PROJECT_PICTURE_SUCCESS:
      return {
        ...state,
        error: null,
        updatingProjectData: false
      };
    case DELETE_PROJECT_PICTURE_FAILURE:
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
