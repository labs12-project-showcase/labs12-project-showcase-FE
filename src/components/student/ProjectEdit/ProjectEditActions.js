import history from '../../../history.js';
import axios from 'axios';

const token = localStorage.getItem('backendToken');

const backendURL = 'https://halg-backend.herokuapp.com';

//
export const GET_PROFILE_DATA_FAILURE = 'GET_PROFILE_DATA_FAILURE';
export const GET_PROFILE_DATA_START = 'GET_PROFILE_DATA_START';
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';

/** Calls back-end for Profile data */
export const getProfileData = () => dispatch => {
  dispatch({ type: GET_PROFILE_DATA_START });
  axios
    .get(`${backendURL}/api/students/profile`, {
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
      dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: noNulls });
    })
    .catch(error => {
      dispatch({ type: GET_PROFILE_DATA_FAILURE, payload: error });
    });
};

//
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';

/**
 * Submits values from Create/Edit Profile form
 * in `ProfileqsForm.js` to API endpoint
 */
export const updateProfile = formValues => dispatch => {

  // *** Match form values to the shape the backend API expects
  const send = {
    account: {
      name: formValues.name
    },
    student: {
      about: formValues.about,
      acclaim: formValues.acclaim,
      desired_title: formValues.desired_title,
      github: formValues.github,
      linkedin: formValues.linkedin,
      location: formValues.location,
      profile_pic: formValues.profile_pic,
      twitter: formValues.twitter,
      website: formValues.website
    }
  };

  dispatch({ type: UPDATE_PROFILE_START });
  axios
    .put(`${backendURL}/api/students/update`, removeEmptyValues(send), {
      headers: { authorization: token }
    })
    .then(res => {
      history.push('/student/dashboard');
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
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