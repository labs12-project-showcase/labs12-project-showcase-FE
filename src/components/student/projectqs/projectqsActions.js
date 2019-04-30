import history from '../../../history.js';
import axios from 'axios';

const token = localStorage.getItem('backendToken');

const backendURL = 'https://halg-backend.herokuapp.com';

//
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';
export const CREATE_PROJECT_START = 'CREATE_PROJECT_START';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';

/**
 * Submits values from Create/Edit Project form
 * in `ProjectqsForm.js` to API endpoint
 */
export const createProject = formValues => dispatch => {

  // *** Match form values to the shape the backend API expects
  const send = {
        track_id: 1,
        student_id: 6,
        name: formValues.name,
        github: formValues.github,
        website: formValues.website,
        medium: formValues.medium,
        customer_pitch: formValues.customer_pitch,
        tech_pitch: formValues.tech_pitch
  };

  dispatch({ type: CREATE_PROJECT_START });
  axios
    .post(`${backendURL}/api/projects`, removeEmptyValues(send), {
      headers: { authorization: token }
    })
    .then(res => {
      history.push('/student/dashboard');
      dispatch({ type: CREATE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: CREATE_PROJECT_FAILURE, payload: error });
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
