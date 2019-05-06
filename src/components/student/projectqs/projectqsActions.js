import axiosAuth from "../../../auth/axiosAuth";
import axios from "axios";

const backendURL = "https://halg-backend.herokuapp.com";

export const CREATE_PROJECT_FAILURE = "CREATE_PROJECT_FAILURE";
export const CREATE_PROJECT_START = "CREATE_PROJECT_START";
export const CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";
export const GET_PROJECT_START = "GET_PROJECT_START";
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS";
export const GET_PROJECT_FAILURE = "GET_PROJECT_FAILURE";
export const CLEAR_PROJECT_DATA = "CLEAR_PROJECT_DATA";
export const UPDATE_PROJECT_FAILURE = "UPDATE_PROJECT_FAILURE";
export const UPDATE_PROJECT_START = "UPDATE_PROJECT_START";
export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";

export const clearProjectData = () => dispatch => {
  dispatch({ type: CLEAR_PROJECT_DATA });
};

/**
 * Submits values from Create/Edit Project form
 * in `ProjectqsForm.js` to API endpoint
 */
export const createProject = formValues => dispatch => {
  const url = formValues.youtube_url;
  let videoid = url.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  );
  if (!videoid) {
    videoid = ["", "gLdXxFS8BV4"];
  }

  // *** Match form values to the shape the backend API expects
  const send = {
    student_id: formValues.student_id,
    skills: formValues.skills,
    project: {
      name: formValues.name,
      github: formValues.github,
      fe_link: formValues.fe_link,
      be_link: formValues.be_link,
      mobile_link: formValues.mobile_link,
      market_link: formValues.market_link,
      design_link: formValues.design_link,
      youtube_url: `https://www.youtube.com/embed/${
        videoid[1]
      }?autoplay=0&showinfo=0&controls=0`,
      website: formValues.website,
      medium: formValues.medium,
      short_description: formValues.short_description,
      customer_pitch: formValues.customer_pitch,
      tech_pitch: formValues.tech_pitch
    }
  };

  dispatch({ type: CREATE_PROJECT_START });
  return new Promise((resolve, reject) => {
    axiosAuth()
      .post(`${backendURL}/api/projects`, removeEmptyValues(send))
      .then(res => {
        dispatch({
          type: CREATE_PROJECT_SUCCESS,
          payload: removeNulls(res.data)
        });
        resolve();
      })
      .catch(error => {
        dispatch({ type: CREATE_PROJECT_FAILURE, payload: "Error" });
        reject();
      });
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
        typeof obj[i] === "object" && !Array.isArray(obj[i])
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

export const getProject = id => dispatch => {
  dispatch({ type: GET_PROJECT_START });
  return axios
    .get(`${backendURL}/api/projects/${id}`)
    .then(res => {
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: removeNulls(res.data)
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROJECT_FAILURE,
        payload: "Could not fetch data."
      });
    });
};

export const updateProject = (formValues, id) => dispatch => {
  const url = formValues.youtube_url;
  let videoid = url.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  );
  if (!videoid) {
    videoid = ["", "gLdXxFS8BV4"];
  }

  const send = {
    student_id: formValues.student_id,
    skills: formValues.skills,
    project: {
      name: formValues.name,
      github: formValues.github,
      fe_link: formValues.fe_link,
      be_link: formValues.be_link,
      mobile_link: formValues.mobile_link,
      market_link: formValues.market_link,
      design_link: formValues.design_link,
      youtube_url: `https://www.youtube.com/embed/${
        videoid[1]
      }?autoplay=0&showinfo=0&controls=0`,
      website: formValues.website,
      medium: formValues.medium,
      short_description: formValues.short_description,
      customer_pitch: formValues.customer_pitch,
      tech_pitch: formValues.tech_pitch
    }
  };

  dispatch({ type: UPDATE_PROJECT_START });
  return axiosAuth()
    .put(`${backendURL}/api/projects/${id}`, removeEmptyValues(send))
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_PROJECT_SUCCESS,
        payload: removeNulls(res.data)
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_PROJECT_FAILURE, payload: "Error" });
      throw new Error("Failed in project update dispatch.");
    });
};
