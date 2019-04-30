import axios from 'axios';

const authHeaders = {
  authorization: localStorage.getItem('backendToken')
};
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
      authHeaders
    })
    .then(res => {
      console.log('getProfileData data: ', res.data);
      dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_PROFILE_DATA_FAILURE, payload: error });
    });
};

// 
export const GET_SOCIAL_DATA_FAILURE = 'GET_SOCIAL_DATA_FAILURE';
export const GET_SOCIAL_DATA_START = 'GET_SOCIAL_DATA_START';
export const GET_SOCIAL_DATA_SUCCESS = 'GET_SOCIAL_DATA_SUCCESS';

/** Calls back-end for GitHub data */
export const getSocialData = () => dispatch => {
  dispatch({ type: GET_SOCIAL_DATA_START });
  axios
    .get(`${backendURL}/api/auth/login/initial`, {
      authHeaders
    })
    .then(res => {
      console.log('getSocialData data: ', res.data);
      dispatch({ type: GET_SOCIAL_DATA_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_SOCIAL_DATA_FAILURE, payload: error });
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
  // match formValues keys to the format the API expects
  const formattedObj = {
    student: {
      about: formValues.summary,
      acclaim: formValues.acclaimBadgeURL,
      // desired_title: formValues.desiredTitle,
      github: formValues.gitHubURL,
      linkedin: formValues.linkedInURL,
      location: formValues.location,
      // name: formValues.name,
      twitter: formValues.twitterURL,
      website: formValues.portfolioURL
    }
  };

  dispatch({ type: UPDATE_PROFILE_START });
  axios
    .put(
      `${backendURL}/api/students/update`,
      { authHeaders },
      removeEmptyValues(formattedObj)
    )
    .then(res => {
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
