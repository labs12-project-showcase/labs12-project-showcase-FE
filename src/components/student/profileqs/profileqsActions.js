import history from '../../../history.js';
import axios from 'axios'; // required for CancelToken
import axiosAuth from '../../../auth/axiosAuth';
import { backendUrl } from '../../../config/urls.js';
import history from "../../../history.js";

export const GET_PROFILE_DATA_FAILURE = 'GET_PROFILE_DATA_FAILURE';
export const GET_PROFILE_DATA_START = 'GET_PROFILE_DATA_START';
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';

/**
 * Calls back-end for Profile data
 * @param {*} queryUpdate Whether the Back End should lookup and send `cohort` and `track` lists
 */
export const getProfileData = (queryUpdate = false) => dispatch => {
  dispatch({ type: GET_PROFILE_DATA_START });
  // if (!token) {
  //   return dispatch({
  //     type: GET_PROFILE_DATA_FAILURE,
  //     payload: 'No token found in Local Storage'
  //   });
  // }
  let url = `${backendURL}/api/students/profile${
    queryUpdate ? '?update=true' : ''
  }`;
  axiosAuth()
    .get(url)
    .then(res => {
      dispatch({
        type: GET_PROFILE_DATA_SUCCESS,
        payload: removeNulls(res.data)
      });
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
export const updateProfile = (formValues, redirect = true) => dispatch => {
  console.log('updateProfile running!');
  // *** Match form values to the shape the backend API expects
  const send = {
    account: {
      name: formValues.name
    },
    // desired_locations: formValues.desired_locations,
    skills: formValues.skills,
    student: {
      about: formValues.about,
      acclaim: formValues.acclaim,
      cohort_id: formValues.cohort_id,
      desired_title: formValues.desired_title,
      github: formValues.github,
      lat: formValues.lat,
      linkedin: formValues.linkedin,
      location: formValues.location,
      lon: formValues.lon,
      profile_pic: formValues.profile_pic,
      track_id: formValues.track_id,
      twitter: formValues.twitter,
      website: formValues.website
    },
    top_skills: formValues.top_skills,
    top_projects: formValues.top_projects,
    projects: formValues.projects
  };
  dispatch({ type: UPDATE_PROFILE_START });
  axiosAuth()
    .put(`${backendUrl}/api/students/update`, removeEmptyValues(send))
    .then(res => {
      if (redirect) {
        history.push(`/student/profile/${formValues.id}`);
      }
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: removeNulls(res.data)
      });
    })
    .catch(error => {
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
    });
};

//
export const UPLOAD_PROFILE_PICTURE_FAILURE = 'UPLOAD_PROFILE_PICTURE_FAILURE';
export const UPLOAD_PROFILE_PICTURE_START = 'UPLOAD_PROFILE_PICTURE_START';
export const UPLOAD_PROFILE_PICTURE_SUCCESS = 'UPLOAD_PROFILE_PICTURE_SUCCESS';

export const uploadProfilePicture = (file, setImageList) => dispatch => {
  dispatch({ type: UPLOAD_PROFILE_PICTURE_START });
  // create FormData for file
  const formData = new FormData();
  formData.append('image', file, file.name);

  // send file to backend API
  axiosAuth()
    .put(
      'https://halg-backend.herokuapp.com/api/students/update/profile_picture',
      formData,
      {
        // create axios CancelToken, and save it to the image object
        cancelToken: new axios.CancelToken(function executor(c) {
          setImageList(previousState => {
            console.log('actions previousState: ', previousState);
            let arr = Array.from(previousState);
            let index;
            for (let i in arr) {
              if (arr[i].url === file.dataUrl) {
                index = i;
                break;
              }
            }
            if (index) {
              arr[index].cancelToken = c;
            }
            return arr;
          });
        })
      }
    )
    .then(res => {
      // replace the dataUrl with the returned Cloudinary URL
      // and remove cancelToken from object
      setImageList(previousState => {
        let arr = Array.from(previousState);
        let index;
        for (let i in arr) {
          if (arr[i].url === file.dataUrl) {
            index = i;
            break;
          }
        }
        if (index) {
          arr[index].url = res.data.student.profile_pic;
          arr[index].cancelToken = null;
        }
        return arr;
      });

      dispatch({
        type: UPLOAD_PROFILE_PICTURE_SUCCESS,
        payload: removeNulls(res.data)
      });
    })
    .catch(error => {
      dispatch({ type: UPLOAD_PROFILE_PICTURE_FAILURE, payload: error });
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
        typeof obj[i] === 'object' && !Array.isArray(obj[i])
          ? { ...r, [i]: removeEmptyValues(obj[i]) } // recurse if nested Object
          : { ...r, [i]: obj[i] },
      {}
    );
}

function removeNulls(obj) {
  let noNulls = {};
  for (let item in obj) {
    if (obj[item] !== null) {
      // Exclude arrays with only `null` within
      if (
        (Array.isArray(obj[item]) && obj[item][0]) ||
        !Array.isArray(obj[item])
      )
        noNulls[item] = obj[item];
    }
  }
  return noNulls;
}
