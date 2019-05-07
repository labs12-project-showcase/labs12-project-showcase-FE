import axiosAuth from '../../auth/axiosAuth.js';
import { backendUrl } from '../../config/urls.js';

export const ADMIN_FETCHED_STUDENTS = 'ADMIN_FETCHED_STUDENTS';
export const ADMIN_FETCHED_PROJECTS = 'ADMIN_FETCHED_PROJECTS';

export const fetchStudents = () => dispatch => {
  axiosAuth().get(`${backendUrl}/api/admin/students`)
    .then(res => {
      dispatch({
        type: ADMIN_FETCHED_STUDENTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const fetchProjects = () => dispatch => {
  axiosAuth().get(`http://localhost:5000/api/admin/projects`)
    .then(res => {
      dispatch({
        type: ADMIN_FETCHED_PROJECTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}