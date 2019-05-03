import axiosAuth from '../../auth/axiosAuth.js';
import { backendUrl } from '../../config/urls.js';

export const ADMIN_FETCHED_STUDENTS = 'ADMIN_FETCHED_STUDENTS';

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