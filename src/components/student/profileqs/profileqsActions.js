import axios from 'axios'; // required for CancelToken
import axiosAuth from '../../../auth/axiosAuth';
import { backendUrl } from '../../../config/urls.js';
import history from '../../../history.js';

//
export const DELETE_PROFILE_PICTURE_FAILURE = 'DELETE_PROFILE_PICTURE_FAILURE';
export const DELETE_PROFILE_PICTURE_START = 'DELETE_PROFILE_PICTURE_START';
export const DELETE_PROFILE_PICTURE_SUCCESS = 'DELETE_PROFILE_PICTURE_SUCCESS';

export const deleteProfilePicture = url => dispatch => {
  dispatch({ type: DELETE_PROFILE_PICTURE_START });
  return axiosAuth()
    .put(`${backendUrl}/api/students/update/profile_picture/remove`, {
      url
    })
    .then(res => {
      dispatch({ type: DELETE_PROFILE_PICTURE_SUCCESS });
    })
    .catch(error => {
      dispatch({
        type: DELETE_PROFILE_PICTURE_FAILURE,
        payload: error
      });
      throw new Error('Image could not be deleted.');
    });
};

//
export const GET_PROFILE_DATA_FAILURE = 'GET_PROFILE_DATA_FAILURE';
export const GET_PROFILE_DATA_START = 'GET_PROFILE_DATA_START';
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';

/**
 * Calls back-end for Profile data
 * @param {*} queryUpdate Whether the Back End should lookup and send `cohort` and `track` lists
 */
export const getProfileData = (queryUpdate = false) => dispatch => {
  dispatch({ type: GET_PROFILE_DATA_START });
  let url = `${backendUrl}/api/students/profile${
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
export const UPDATE_PROFILE_PIC_URL_SUCCESS = 'UPDATE_PROFILE_PIC_URL_SUCCESS';

/**
 * Submits values from Create/Edit Profile form
 * in `ProfileqsForm.js` to API endpoint
 */
export const updateProfile = (formValues, redirect = true) => dispatch => {
  // console.log('updateProfile running!');
  // *** Match form values to the shape the backend API expects
  const send = {
    account: {
      name: formValues.name
    },
    desired_locations: formValues.desired_locations,
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
    .put(`${backendUrl}/api/students/update`, send)
    .then(res => {
      if (redirect) {
        history.push(`/student/profile/${formValues.id}`);
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: removeNulls(res.data)
        });
      } else {
        dispatch({
          type: UPDATE_PROFILE_PIC_URL_SUCCESS,
          payload: res.data.profile_pic
        });
      }
    })
    .catch(error => {
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
    });
};

//
export const UPLOAD_PROFILE_PICTURE_FAILURE = 'UPLOAD_PROFILE_PICTURE_FAILURE';
export const UPLOAD_PROFILE_PICTURE_START = 'UPLOAD_PROFILE_PICTURE_START';
export const UPLOAD_PROFILE_PICTURE_SUCCESS = 'UPLOAD_PROFILE_PICTURE_SUCCESS';

export const uploadProfilePicture = (dataObject, setImageList) => dispatch => {
  dispatch({ type: UPLOAD_PROFILE_PICTURE_START });
  // create FormData for file
  const formData = new FormData();
  formData.append('image', dataObject.file, dataObject.file.name);

  // send file to backend API
  axiosAuth()
    .put(`${backendUrl}/api/students/update/profile_picture`, formData, {
      // create axios CancelToken, and save it to the image object
      cancelToken: new axios.CancelToken(function executor(c) {
        setImageList(previousState => {
          console.log('actions previousState: ', previousState);
          let arr = Array.from(previousState);
          let index;
          for (let i in arr) {
            if (arr[i].url === dataObject.dataUrl) {
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
    })
    .then(res => {
      if (res.status !== 200) {
        throw new Error(
          `Something went wrong updating the profile picture. Status: ${
            res.status
          }`
        );
      }
      // replace the dataUrl with the returned Cloudinary URL
      // and remove cancelToken from object
      setImageList(previousState => {
        let arr = Array.from(previousState);
        let index;
        for (let i in arr) {
          if (arr[i].url === dataObject.dataUrl) {
            index = i;
            break;
          }
        }
        if (index) {
          arr[index].url = res.data.profile_pic;
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

function removeNulls(obj) {
  let noNulls = {};
  for (let item in obj) {
    if (obj[item] !== null) {
      // Exclude arrays with only `null` within
      if (
        (Array.isArray(obj[item]) && obj[item][0]) !== null ||
        !Array.isArray(obj[item])
      )
        noNulls[item] = obj[item];
    }
  }
  return noNulls;
}
