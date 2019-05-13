import axiosAuth from "../../auth/axiosAuth.js";
import { backendUrl } from "../../config/urls.js";

export const ADMIN_FETCHED_STUDENTS_START = "ADMIN_FETCHED_STUDENTS_START";
export const ADMIN_FETCHED_STUDENTS_SUCCESS = "ADMIN_FETCHED_STUDENTS_SUCCESS";
export const ADMIN_FETCHED_STUDENTS_FAILURE = "ADMIN_FETCHED_STUDENTS_FAILURE";

export const fetchStudents = () => dispatch => {
  dispatch({ type: ADMIN_FETCHED_STUDENTS_START });
  axiosAuth()
    // .get(`http://localhost:5000/api/admin/students`)
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

export const updateStudent = (id, info) => dispatch => {
  dispatch({ type: ADMIN_UPDATED_STUDENT_START });
  axiosAuth()
    // .put(`http://localhost:5000/api/admin/students/${id}`, info)
    .put(`${backendUrl}/api/admin/students/${id}`, info)
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


export const ADMIN_FETCHED_COHORTS_START = "ADMIN_FETCHED_COHORTS_START";
export const ADMIN_FETCHED_COHORTS_SUCCESS = "ADMIN_FETCHED_COHORTS_SUCCESS";
export const ADMIN_FETCHED_COHORTS_FAILURE = "ADMIN_FETCHED_COHORTS_FAILURE";

export const getCohorts = () => dispatch => {
  dispatch({ type: ADMIN_FETCHED_COHORTS_START });
  axiosAuth()
    // .get(`http://localhost:5000/api/admin/cohorts`)
    .get(`${backendUrl}/api/admin/cohorts`)
    .then(res => {
      dispatch({
        type: ADMIN_FETCHED_COHORTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_FETCHED_COHORTS_FAILURE, payload: err });
    });
};

export const ADMIN_UPDATED_COHORT_START = "ADMIN_UPDATED_COHORT_START";
export const ADMIN_UPDATED_COHORT_SUCCESS = "ADMIN_UPDATED_COHORT_SUCCESS";
export const ADMIN_UPDATED_COHORT_FAILURE = "ADMIN_UPDATED_COHORT_FAILURE";

export const updateCohort = (id, info) => dispatch => {
  dispatch({ type: ADMIN_UPDATED_COHORT_START });
  axiosAuth()
    // .put(`http://localhost:5000/api/admin/cohorts/${id}`, info)
    .put(`${backendUrl}/api/admin/cohorts/${id}`, info)
    .then(res => {
      dispatch({
        type: ADMIN_UPDATED_COHORT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_UPDATED_COHORT_FAILURE, payload: err });
    });
};

export const ADMIN_DELETED_COHORT_START = "ADMIN_DELETED_COHORT_START";
export const ADMIN_DELETED_COHORT_SUCCESS = "ADMIN_DELETED_COHORT_SUCCESS";
export const ADMIN_DELETED_COHORT_FAILURE = "ADMIN_DELETED_COHORT_FAILURE";

export const deleteCohort = (id) => dispatch => {
  dispatch({ type: ADMIN_DELETED_COHORT_START });
  axiosAuth()
    // .put(`http://localhost:5000/api/admin/cohorts/${id}`, info)
    .put(`${backendUrl}/api/admin/cohorts/${id}`)
    .then(res => {
      dispatch({
        type: ADMIN_DELETED_COHORT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_DELETED_COHORT_FAILURE, payload: err });
    });
};

export const ADMIN_ADDED_COHORT_START = "ADMIN_ADDED_COHORT_START";
export const ADMIN_ADDED_COHORT_SUCCESS = "ADMIN_ADDED_COHORT_SUCCESS";
export const ADMIN_ADDED_COHORT_FAILURE = "ADMIN_ADDED_COHORT_FAILURE";

export const addCohort = (info) => dispatch => {
  dispatch({ type: ADMIN_ADDED_COHORT_START });
  axiosAuth()
    // .put(`http://localhost:5000/api/admin/cohorts`, info)
    .put(`${backendUrl}/api/admin/cohorts`, info)
    .then(res => {
      dispatch({
        type: ADMIN_ADDED_COHORT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADMIN_ADDED_COHORT_FAILURE, payload: err });
    });
};
