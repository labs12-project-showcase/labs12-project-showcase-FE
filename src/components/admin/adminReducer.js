import {
  //****STUDENT ACTION TYPES**** */
  ADMIN_FETCHED_STUDENTS_START,
  ADMIN_FETCHED_STUDENTS_SUCCESS,
  ADMIN_FETCHED_STUDENTS_FAILURE,
  ADMIN_UPDATED_STUDENT_START,
  ADMIN_UPDATED_STUDENT_SUCCESS,
  ADMIN_UPDATED_STUDENT_FAILURE,
  //****PROJECT ACTION TYPES**** */
  ADMIN_FETCHED_PROJECTS_START,
  ADMIN_FETCHED_PROJECTS_SUCCESS,
  ADMIN_FETCHED_PROJECTS_FAILURE,
  ADMIN_UPDATED_PROJECT_START,
  ADMIN_UPDATED_PROJECT_SUCCESS,
  ADMIN_UPDATED_PROJECT_FAILURE,
  //****COHORTS ACTION TYPES**** */
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
  //****TRACK ACTION TYPES**** */
  ADMIN_FETCHED_TRACKS_START,
  ADMIN_FETCHED_TRACKS_SUCCESS,
  ADMIN_FETCHED_TRACKS_FAILURE,
  ADMIN_UPDATED_TRACK_START,
  ADMIN_UPDATED_TRACK_SUCCESS,
  ADMIN_UPDATED_TRACK_FAILURE,
  ADMIN_DELETED_TRACK_START,
  ADMIN_DELETED_TRACK_SUCCESS,
  ADMIN_DELETED_TRACK_FAILURE,
  //****COHORTS ACTION TYPES**** */
  ADMIN_FETCHED_ACCOUNTS_START,
  ADMIN_FETCHED_ACCOUNTS_SUCCESS,
  ADMIN_FETCHED_ACCOUNTS_FAILURE,
  ADMIN_DELETED_ACCOUNT_START,
  ADMIN_DELETED_ACCOUNT_SUCCESS,
  ADMIN_DELETED_ACCOUNT_FAILURE,
  ADMIN_UPDATED_ACCOUNT_START,
  ADMIN_UPDATED_ACCOUNT_SUCCESS,
  ADMIN_UPDATED_ACCOUNT_FAILURE,
} from "./adminActions";

const initialState = {
  accounts: [],
  cohorts: [],
  projects: [],
  students: [],
  tracks:[],
  updatingAccountsData: false,
  updatingCohortsData: false,
  updatingProjectData: false,
  updatingStudentData: false,
  updatingTracksData: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    
    //******************************PROJECT TABLE REDUCERS************************** */
    
    //****FETCHED PROJECTS**** */

    case ADMIN_FETCHED_PROJECTS_START:
    return {
        ...state
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

      //****UPDATED PROJECTS**** */

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
          } else {
            arr.push(cur);
            return arr;
          }}, []),
        updatingProjectData: false
      };
      case ADMIN_UPDATED_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProjectData: false
      };
      
      //******************************STUDENT TABLE REDUCERS************************** */

      //****FETCHED STUDENTS**** */

      case ADMIN_FETCHED_STUDENTS_START:
        return {
          ...state
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

      //****UPDATED STUDENTS**** */

      case ADMIN_UPDATED_STUDENT_START:
      return {
        ...state
      };
    case ADMIN_UPDATED_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.reduce((arr, cur) => {
          console.log(cur.id, action.payload.id);
          if(cur.id === action.payload.id) {
            arr.push({ ...cur, ...action.payload });
            return arr;
          } else {
            arr.push(cur);
            return arr;
          }}, []),
        updatingStudentData: false
      };
    case ADMIN_UPDATED_STUDENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingStudentData: false
      };

//******************************COHORTS TABLE REDUCERS************************** */

    //****FETCHED COHORTS**** */
    case ADMIN_FETCHED_COHORTS_START:
      return {
        ...state
      };
    case ADMIN_FETCHED_COHORTS_SUCCESS:
      return {
        ...state,
        cohorts: action.payload
      };
    case ADMIN_FETCHED_COHORTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    
    //****UPDATED COHORTS**** */

    case ADMIN_UPDATED_COHORT_START:
      return {
        ...state,
        updatingCohortsData: true
      };
    case ADMIN_UPDATED_COHORT_SUCCESS:
    return {
      ...state,
      cohorts: state.cohorts.reduce((arr, cur) => {
        if(cur.id === action.payload.id) {
          arr.push({ ...cur, ...action.payload });
          return arr;
        } else {
          arr.push(cur);
          return arr;
        }
      }, []),
      updatingCohortsData: false
    };
    case ADMIN_UPDATED_COHORT_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingCohortsData: false
      };

    //****DELETED COHORTS**** */

    case ADMIN_DELETED_COHORT_START:
      return {
        ...state,
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

    //****ADDED COHORTS**** */
    case ADMIN_ADDED_COHORT_START:
      return {
        ...state,
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

//******************************TRACKS TABLE REDUCERS************************** */

//****FETCHED TRACKS**** */

    case ADMIN_FETCHED_TRACKS_START:
    return {
        ...state
    };
    case ADMIN_FETCHED_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload
      };
    case ADMIN_FETCHED_TRACKS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    //****UPDATED TRACKS**** */

      case ADMIN_UPDATED_TRACK_START:
      return {
        ...state
      }
    case ADMIN_UPDATED_TRACK_SUCCESS:
      return {
        ...state,
        tracks: state.tracks.reduce((arr, cur) => {
          if(cur.id === action.payload.id) {
            arr.push({ ...cur, ...action.payload });
            return arr;
          }
          arr.push(cur);
          return arr;
        }, []),
        updatingTracksData: false
      };
    case ADMIN_UPDATED_TRACK_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingTracksData: false
      }; 

    //****DELETE TRACKS**** */

    case ADMIN_DELETED_TRACK_START:
    return {
      ...state
    };
      case ADMIN_DELETED_TRACK_SUCCESS:
      return {
        ...state,
        tracks: state.tracks.filter(cur => {
          return cur.id !== action.payload.id;
        }),
        updatingTracksData: false
      };
    case ADMIN_DELETED_TRACK_FAILURE:
      return {
        ...state,
        error: action.payload
      };

      //******************************ACCOUNTS TABLE REDUCERS************************** */

    //****FETCHED ACCOUNTS**** */
    case ADMIN_FETCHED_ACCOUNTS_START:
    return {
      ...state
    };
  case ADMIN_FETCHED_ACCOUNTS_SUCCESS:
    return {
      ...state,
      accounts: action.payload
    };
  case ADMIN_FETCHED_ACCOUNTS_FAILURE:
    return {
      ...state,
      error: action.payload
    };
  
  //****UPDATED ACCOUNT**** */

  case ADMIN_UPDATED_ACCOUNT_START:
    return {
      ...state,
      updatingAccountsData: true
    };
  case ADMIN_UPDATED_ACCOUNT_SUCCESS:
    return {
      ...state,
      accounts: action.payload,
      updatingAccountsData: false
    };
  case ADMIN_UPDATED_ACCOUNT_FAILURE:
    return {
      ...state,
      error: action.payload,
      updatingAccountsData: false
    };

  //****DELETED ACCOUNT**** */

  case ADMIN_DELETED_ACCOUNT_START:
    return {
      ...state,
      updatingAccountsData: true
    };
  case ADMIN_DELETED_ACCOUNT_SUCCESS:
    return {
      ...state,
      accounts: action.payload,
      updatingAccountsData: false
    };
  case ADMIN_DELETED_ACCOUNT_FAILURE:
    return {
      ...state,
      error: action.payload,
      updatingAccountsData: false
    };
    default:
      return state;
  }
};

export default adminReducer;
