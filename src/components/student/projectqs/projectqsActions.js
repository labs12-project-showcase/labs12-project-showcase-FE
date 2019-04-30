import history from '../../../history.js';
import axios from 'axios';

const token = localStorage.getItem('backendToken');

const backendURL = 'https://halg-backend.herokuapp.com';

//
export const GET_PROJECT_DATA_FAILURE = 'GET_PROJECT_DATA_FAILURE';
export const GET_PROJECT_DATA_START = 'GET_PROJECT_DATA_START';
export const GET_PROJECT_DATA_SUCCESS = 'GET_PROJECT_DATA_SUCCESS';

/** Calls back-end for Profile data */
export const getProjectData = () => dispatch => {
  dispatch({ type: GET_PROJECT_DATA_START });
  axios
    .get(`${backendURL}/api/projects`, {
      headers: {
        Authorization: token
      }
    })
    .then(res => {
      // remove nulls from the response
      let noNulls = {};
      for (let item in res.data) {
        if (res.data[item] !== null) {
          noNulls[item] = res.data[item];
        }
      }
      dispatch({ type: GET_PROJECT_DATA_SUCCESS, payload: noNulls });
    })
    .catch(error => {
      dispatch({ type: GET_PROJECT_DATA_FAILURE, payload: error });
    });
};

//
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';
export const UPDATE_PROJECT_START = 'UPDATE_PROJECT_START';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';

/**
 * Submits values from Create/Edit Project form
 * in `ProjectqsForm.js` to API endpoint
 */
export const updateProject = formValues => dispatch => {

  // *** Match form values to the shape the backend API expects
  const send = {
    account: {
      name: formValues.name
    },
    project: {
      project_title: formValues.name,
      project_type: "Web App",
      live_demo_url: formValues.website,
      medium_article_url: formValues.medium,
      customer_sales_pitch: formValues.customer_pitch,
      technical_sales_pitch: formValues.tech_pitch
    }
  };

  dispatch({ type: UPDATE_PROJECT_START });
  axios
    .put(`${backendURL}/api/projects`, removeEmptyValues(send), {
      headers: { authorization: token }
    })
    .then(res => {
      history.push('/student/dashboard');
      dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_PROJECT_FAILURE, payload: error });
    });
};

/**
 * Accepts an Object literal and returns a new object
 * with all false-y values removed. Uses recursion to handle
 * nested objects, too.
 * @param {Object} obj Object literal to be trimmed
 */
function removeEmptyValues(obj) {
  return Object.keys(obj)
    .filter(f => Boolean(obj[f]))
    .reduce(
      (r, i) =>
        typeof obj[i] === 'object'
          ? { ...r, [i]: removeEmptyValues(obj[i]) } // recurse if nested Object
          : { ...r, [i]: obj[i] },
      {}
    );
}
