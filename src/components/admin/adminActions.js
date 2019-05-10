import axiosAuth from "../../auth/axiosAuth.js";
import { backendUrl } from "../../config/urls.js";

export const ADMIN_FETCHED_STUDENTS_START = "ADMIN_FETCHED_STUDENTS_START";
export const ADMIN_FETCHED_STUDENTS_SUCCESS = "ADMIN_FETCHED_STUDENTS_SUCCESS";
export const ADMIN_FETCHED_STUDENTS_FAILURE = "ADMIN_FETCHED_STUDENTS_FAILURE";

export const fetchStudents = () => dispatch => {
  dispatch({ type: ADMIN_FETCHED_STUDENTS_START });
  axiosAuth()
    .get(`${backendUrl}/api/admin/students`)
    .then(res => {
      dispatch({
        type: ADMIN_FETCHED_STUDENTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FETCHED_STUDENTS_FAILURE, payload: err });
    });
};

export const ADMIN_FETCHED_PROJECTS_START = "ADMIN_FETCHED_PROJECTS_START";
export const ADMIN_FETCHED_PROJECTS_SUCCESS = "ADMIN_FETCHED_PROJECTS_SUCCESS";
export const ADMIN_FETCHED_PROJECTS_FAILURE = "ADMIN_FETCHED_PROJECTS_FAILURE";

export const fetchProjects = () => dispatch => {
  dispatch({ type: ADMIN_FETCHED_PROJECTS_START });
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
};

export const ADMIN_UPDATED_PROJECT_START = "ADMIN_UPDATED_PROJECT_START";
export const ADMIN_UPDATED_PROJECT_SUCCESS = "ADMIN_UPDATED_PROJECT_SUCCESS";
export const ADMIN_UPDATED_PROJECT_FAILURE = "ADMIN_UPDATED_PROJECT_FAILURE";

export const updateProject = (id, info) => dispatch => {
  dispatch({ type: ADMIN_UPDATED_PROJECT_START });
  axiosAuth()
    .put(`${backendUrl}/api/admin/projects/${id}`, info)
    .then(res => {
      console.log("res.data: ", res.data);
      dispatch({
        type: ADMIN_UPDATED_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADMIN_UPDATED_PROJECT_FAILURE, payload: err });
    });
};

export const ADMIN_UPDATED_STUDENT_START = "ADMIN_UPDATED_STUDENT_START";
export const ADMIN_UPDATED_STUDENT_SUCCESS = "ADMIN_UPDATED_STUDENT_SUCCESS";
export const ADMIN_UPDATED_STUDENT_FAILURE = "ADMIN_UPDATED_STUDENT_FAILURE";

export const updateStudent = () => dispatch => {
  dispatch({ type: ADMIN_UPDATED_STUDENT_START });
  axiosAuth()
    .put(`${backendUrl}/api/admin/students`)
    .then(res => {
      dispatch({
        type: ADMIN_UPDATED_STUDENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_UPDATED_STUDENT_FAILURE, payload: err });
    });
};
