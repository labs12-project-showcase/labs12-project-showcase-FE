import axios from "axios";
import { backendUrl } from "../../config/urls.js";

export const FETCHED_MAP_DATA_START = "FETCHED_MAP_DATA_START";
export const FETCHED_MAP_DATA_SUCCESS = "FETCHED_MAP_DATA_SUCCESS";
export const FETCHED_MAP_DATA_FAILURE = "FETCHED_MAP_DATA_FAILURE";

export const fetchMapData = () => dispatch => {
  console.log("Fetching Map Data...");
  dispatch({ type: FETCHED_MAP_DATA_START });
  axios
    .get(`${backendUrl}/api/students/cards`)
    .then(res => res.data)

    .then(mapData =>
      dispatch({
        type: FETCHED_MAP_DATA_SUCCESS,
        payload: mapData
      })
    )
    .catch(err => {
      dispatch({
        type: FETCHED_MAP_DATA_FAILURE,
        payload: err
      });
    });
};
