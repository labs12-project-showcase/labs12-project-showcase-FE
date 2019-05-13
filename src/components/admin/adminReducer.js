import {
  ADMIN_FETCHED_STUDENTS_START,
  ADMIN_FETCHED_STUDENTS_SUCCESS,
  ADMIN_FETCHED_STUDENTS_FAILURE,
  ADMIN_UPDATED_STUDENT_START,
  ADMIN_UPDATED_STUDENT_SUCCESS,
  ADMIN_UPDATED_STUDENT_FAILURE,
  ADMIN_FETCHED_PROJECTS_START,
  ADMIN_FETCHED_PROJECTS_SUCCESS,
  ADMIN_FETCHED_PROJECTS_FAILURE,
  ADMIN_UPDATED_PROJECT_START,
  ADMIN_UPDATED_PROJECT_SUCCESS,
  ADMIN_UPDATED_PROJECT_FAILURE,
  ADMIN_FETCHED_COHORTS_START,
  ADMIN_FETCHED_COHORTS_SUCCESS,
  ADMIN_FETCHED_COHORTS_FAILURE,
  ADMIN_ADDED_COHORT_START,
  ADMIN_ADDED_COHORT_SUCCESS,
  ADMIN_ADDED_COHORT_FAILURE,
  ADMIN_DELETED_COHORT_START,
  ADMIN_DELETED_COHORT_SUCCESS,
  ADMIN_DELETED_COHORT_FAILURE,
  ADMIN_UPDATED_COHORT_START,
  ADMIN_UPDATED_COHORT_SUCCESS,
  ADMIN_UPDATED_COHORT_FAILURE,
} from "./adminActions";

const initialState = {
  students: [],
  projects: [],
  cohorts: [],
  updatingProjectData: false,
  updatingStudentData: false,
  updatingCohortsData: false
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FETCHED_STUDENTS_START:
      return {
        ...state,
        students: action.payload
      };
    case ADMIN_FETCHED_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload
      };
    case ADMIN_FETCHED_STUDENTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADMIN_FETCHED_PROJECTS_START:
      return {
        ...state,
        projects: action.payload
      };
    case ADMIN_FETCHED_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      };
    case ADMIN_FETCHED_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADMIN_UPDATED_PROJECT_START:
      return {
        ...state,
        updatingProjectData: true
      };
    case ADMIN_UPDATED_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.reduce((arr, cur) => {
          console.log(cur.id, action.payload.id);
          if(cur.id === action.payload.id) {
            arr.push({ ...cur, ...action.payload });
            return arr;
          }
          arr.push(cur);
          return arr;
        }, []),
        updatingProjectData: false
      };
    case ADMIN_UPDATED_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProjectData: false
      };
    case ADMIN_UPDATED_STUDENT_START:
      return {
        ...state,
        updatingStudentData: true
      };
    case ADMIN_UPDATED_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.reduce((arr, cur) => {
          console.log(cur.id, action.payload.id);
          if(cur.id === action.payload.id) {
            arr.push({ ...cur, ...action.payload });
            return arr;
          }
          arr.push(cur);
          return arr;
        }, []),
        updatingStudentData: false
      };
    case ADMIN_UPDATED_STUDENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingStudentData: false
      };
    case ADMIN_FETCHED_COHORTS_START:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: true
      };
    case ADMIN_FETCHED_COHORTS_SUCCESS:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_FETCHED_COHORTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_UPDATED_COHORT_START:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: true
      };
    case ADMIN_UPDATED_COHORT_SUCCESS:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_UPDATED_COHORT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_DELETED_COHORT_START:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: true
      };
    case ADMIN_DELETED_COHORT_SUCCESS:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_DELETED_COHORT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_ADDED_COHORT_START:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: true
      };
    case ADMIN_ADDED_COHORT_SUCCESS:
      return {
        ...state,
        cohorts: action.payload,
        updatingCohortsData: false
      };
    case ADMIN_ADDED_COHORT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingCohortsData: false
      };
    default:
      return state;
  }
};

export default adminReducer;
