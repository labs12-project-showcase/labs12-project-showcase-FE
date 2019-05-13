import {
  ADMIN_FETCHED_STUDENTS_START,
  ADMIN_FETCHED_STUDENTS_SUCCESS,
  ADMIN_FETCHED_STUDENTS_FAILURE,
  ADMIN_FETCHED_PROJECTS_START,
  ADMIN_FETCHED_PROJECTS_SUCCESS,
  ADMIN_FETCHED_PROJECTS_FAILURE,
  ADMIN_UPDATED_PROJECT_START,
  ADMIN_UPDATED_PROJECT_SUCCESS,
  ADMIN_UPDATED_PROJECT_FAILURE,
  ADMIN_UPDATED_STUDENT_START,
  ADMIN_UPDATED_STUDENT_SUCCESS,
  ADMIN_UPDATED_STUDENT_FAILURE,
  ADMIN_FETCHED_TRACKS_START,
  ADMIN_FETCHED_TRACKS_SUCCESS,
  ADMIN_FETCHED_TRACKS_FAILURE,
  ADMIN_UPDATED_TRACK_START,
  ADMIN_UPDATED_TRACK_SUCCESS,
  ADMIN_UPDATED_TRACK_FAILURE,
  ADMIN_DELETED_TRACK_START,
  ADMIN_DELETED_TRACK_SUCCESS,
  ADMIN_DELETED_TRACK_FAILURE
} from "./adminActions";

const initialState = {
  students: [],
  projects: [],
  tracks:[],
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
      
      //******************************STUDENT TABLE REDUCERS************************** */

      //****FETHCED STUDENTS**** */

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

      //****UPDATED STUDENTS**** */

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

//******************************TRACKS TABLE REDUCERS************************** */

//****FETCHED TRACKS**** */

    case ADMIN_FETCHED_TRACKS_START:
    return {
        ...state,
        tracks: action.payload
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
        ...state,
        tracks: action.payload,
        updatingTracksData: true
      }
    case ADMIN_UPDATED_TRACK_SUCCESS:
      return {
        ...state,
        tracks: action.payload,
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
      ...state,
      tracks: action.payload
    };
      case ADMIN_DELETED_TRACK_SUCCESS:
      return {
        ...state,
        tracks: action.payload
      };
    case ADMIN_DELETED_TRACK_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
