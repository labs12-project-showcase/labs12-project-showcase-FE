import {
  ADMIN_FETCHED_STUDENTS,
  ADMIN_FETCHED_PROJECTS,
  ADMIN_UPDATED_PROJECTS
} from "./adminActions";

const initialState = {
  students: [],
  projects: []
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FETCHED_STUDENTS:
      return {
        ...state,
        students: action.payload
      }
      case ADMIN_FETCHED_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
      case ADMIN_UPDATED_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    default:
      return state;
  }
};

export default adminReducer;