import axiosAuth from "../../../auth/axiosAuth";
import axios from "axios";
import { backendUrl } from "../../../config/urls.js";

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
      .post(`${backendUrl}/api/projects`, send)
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
    .get(`${backendUrl}/api/projects/${id}`)
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
    .put(`${backendUrl}/api/projects/${id}`, send)
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

export const UPLOAD_PROJECT_PICTURE_FAILURE = "UPLOAD_PROJECT_PICTURE_FAILURE";
export const UPLOAD_PROJECT_PICTURE_START = "UPLOAD_PROJECT_PICTURE_START";
export const UPLOAD_PROJECT_PICTURE_SUCCESS = "UPLOAD_PROJECT_PICTURE_SUCCESS";

export const uploadProjectPicture = (
  dataObject,
  setImageList,
  id
) => dispatch => {
  dispatch({ type: UPLOAD_PROJECT_PICTURE_START });
  // create FormData for file
  const formData = new FormData();
  formData.append("image", dataObject.file, dataObject.file.name);

  // send file to backend API
  axiosAuth()
    .put(
      `https://halg-backend.herokuapp.com/api/projects/${id}/media`,
      formData,
      {
        // create axios CancelToken, and save it to the image object
        cancelToken: new axios.CancelToken(function executor(c) {
          setImageList(previousState => {
            console.log("actions previousState: ", previousState);
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
      }
    )
    .then(res => {
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
          arr[index].url = res.data.project_media[0];
          arr[index].cancelToken = null;
        }
        return arr;
      });

      dispatch({
        type: UPLOAD_PROJECT_PICTURE_SUCCESS,
        payload: removeNulls(res.data)
      });
    })
    .catch(error => {
      dispatch({ type: UPLOAD_PROJECT_PICTURE_FAILURE, payload: error });
    });
};

export const DELETE_PROJECT_PICTURE_FAILURE = "DELETE_PROJECT_PICTURE_FAILURE";
export const DELETE_PROJECT_PICTURE_START = "DELETE_PROJECT_PICTURE_START";
export const DELETE_PROJECT_PICTURE_SUCCESS = "DELETE_PROJECT_PICTURE_SUCCESS";

export const deleteProjectPicture = (url, id) => dispatch => {
  dispatch({ type: DELETE_PROJECT_PICTURE_START });
  return axiosAuth()
    .put(`https://halg-backend.herokuapp.com/api/projects/${id}/media/remove`, {
      url
    })
    .then(res => {
      dispatch({ type: DELETE_PROJECT_PICTURE_SUCCESS });
    })
    .catch(err => {
      dispatch({
        type: DELETE_PROJECT_PICTURE_FAILURE,
        payload: "Could not delete project image."
      });
      throw new Error("Image could not be deleted.");
    });
};
