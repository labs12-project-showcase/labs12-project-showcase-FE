import {
  ADMIN_FETCHED_STUDENTS_START,
  ADMIN_FETCHED_STUDENTS_SUCCESS,
  ADMIN_FETCHED_STUDENTS_FAILURE,
  ADMIN_FETCHED_PROJECTS_START,
  ADMIN_FETCHED_PROJECTS_SUCCESS,
  ADMIN_FETCHED_PROJECTS_FAILURE,
  ADMIN_UPDATED_PROJECTS_START,
  ADMIN_UPDATED_PROJECTS_SUCCESS,
  ADMIN_UPDATED_PROJECTS_FAILURE,
  ADMIN_UPDATED_STUDENTS_START,
  ADMIN_UPDATED_STUDENTS_SUCCESS,
  ADMIN_UPDATED_STUDENTS_FAILURE
} from "./adminActions";

const initialState = {
  students: [],
  projects: [],
  updatedProjectData: false,
  updatedStudentData: false
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FETCHED_STUDENTS_START:
      return {
        ...state,
        students: action.payload
      }
      case ADMIN_FETCHED_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload
      }
      case ADMIN_FETCHED_STUDENTS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      case ADMIN_FETCHED_PROJECTS_START:
      return {
        ...state,
        projects: action.payload
      }
      case ADMIN_FETCHED_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      }
      case ADMIN_FETCHED_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      case ADMIN_UPDATED_PROJECTS_START:
      return {
        ...state,
        projects: action.payload,
        updatedProjectData: true
      }
      case ADMIN_UPDATED_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        updatedProjectData: false
      }
      case ADMIN_UPDATED_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatedProjectData: false
      }
      case ADMIN_UPDATED_STUDENTS_START:
      return {
        ...state,
        projects: action.payload,
        updatedStudentData: true
      }
      case ADMIN_UPDATED_STUDENTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        updatedStudentData: false
      }
      case ADMIN_UPDATED_STUDENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatedStudentData: false
      }
    default:
      return state;
  }
};

export default adminReducer;