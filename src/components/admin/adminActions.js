import axiosAuth from '../../auth/axiosAuth.js';
import { backendUrl } from '../../config/urls.js';


export const ADMIN_FETCHED_STUDENTS_START = 'ADMIN_FETCHED_STUDENTS_START';
export const ADMIN_FETCHED_STUDENTS_SUCCESS = 'ADMIN_FETCHED_STUDENTS_SUCCESS';
export const ADMIN_FETCHED_STUDENTS_FAILURE = 'ADMIN_FETCHED_STUDENTS_FAILURE';


export const fetchStudents = () => dispatch => {
  axiosAuth().get(`${backendUrl}/api/admin/students`)
  .then(res => {
    dispatch({
        type: ADMIN_FETCHED_STUDENTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }


  export const ADMIN_FETCHED_PROJECTS_START = 'ADMIN_FETCHED_PROJECTS_START';
  export const ADMIN_FETCHED_PROJECTS_SUCCESS = 'ADMIN_FETCHED_PROJECTS_SUCCESS';
  export const ADMIN_FETCHED_PROJECTS_FAILURE = 'ADMIN_FETCHED_PROJECTS_FAILURE';


export const fetchProjects = () => dispatch => {
  dispatch({ type: ADMIN_FETCHED_PROJECTS_START});
  axiosAuth()
    .get(`${backendUrl}/api/admin/projects`)
    .then(res => {
      dispatch({
        type: ADMIN_FETCHED_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FETCHED_PROJECTS_FAILURE, payload: err });
    });
  }

  export const ADMIN_UPDATED_PROJECTS_START = 'ADMIN_UPDATED_PROJECTS_START';
  export const ADMIN_UPDATED_PROJECTS_SUCCESS = 'ADMIN_UPDATED_PROJECTS_SUCCESS';
  export const ADMIN_UPDATED_PROJECTS_FAILURE = 'ADMIN_UPDATED_PROJECTS_FAILURE';
  
  export const updatedProjects = () => dispatch => {
    axiosAuth().put(`${backendUrl}/api/admin/projects`)
    .then(res => {
      dispatch({
        type: ADMIN_UPDATED_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}