import axios from "axios";

import { backendUrl } from "../../config/urls.js";

export const GET_FILTERED_CARDS_FAILURE = "GET_FILTERED_CARDS_FAILURE";
export const GET_FILTERED_CARDS_START = "GET_FILTERED_CARDS_START";
export const GET_FILTERED_CARDS_SUCCESS = "GET_FILTERED_CARDS_SUCCESS";
export const ADD_FILTERED_CARDS_SUCCESS = "ADD_FILTERED_CARDS_SUCCESS";

export const getFilteredCards = ({
  android,
  badge,
  dataScience,
  filterDesLoc,
  fullStack,
  ios,
  location,
  page = 0,
  search,
  uiux,
  within
}) => dispatch => {
  dispatch({ type: GET_FILTERED_CARDS_START });

  const badgeString = badge ? "&badge=true" : "";
  const desLocString =
    filterDesLoc && location && location.value ? "&filterDesLoc=true" : "";
  const lat = location && location.value.lat ? location.value.lat : null;
  const lon = location && location.value.lon ? location.value.lon : null;
  const latLonString = lat && lon ? `&lat=${lat}&lon=${lon}` : "";
  const searchString = search ? `&search=${search}` : "";
  const tracks = `${fullStack ? "1" : ""}${ios ? "2" : ""}${
    dataScience ? "3" : ""
  }${android ? "4" : ""}${uiux ? "5" : ""}`;
  const tracksString = `?tracks=${tracks === "" ? "none" : tracks}`;
  const withinString = lat && lon && within ? `&within=${within}` : "";
  const locationString = location
    ? `&location=${encodeURIComponent(location.label)}`
    : "";

  const queryString =
    // tracks must go first
    tracksString +
    badgeString +
    desLocString +
    latLonString +
    searchString +
    withinString +
    locationString;
  // console.log('query string', queryString);

  return axios
    .get(
      `${backendUrl}/api/students/cards/filter${queryString}${
        page > 0 ? `&offset=${page * 8}` : ""
      }`
    )
    .then(res => {
      console.log("page in action", page);
      if (page === 0) {
        dispatch({
          type: GET_FILTERED_CARDS_SUCCESS,
          payload: res.data
        });
      } else {
        dispatch({
          type: ADD_FILTERED_CARDS_SUCCESS,
          payload: res.data
        });
      }
      return {
        queryString,
        results: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_FILTERED_CARDS_FAILURE,
        payload: err
      });
      throw new Error("Could not fetch cards.");
    });
};

export const GET_INITIAL_CARDS_FAILURE = "GET_INITIAL_CARDS_FAILURE";
export const GET_INITIAL_CARDS_START = "GET_INITIAL_CARDS_START";
export const GET_INITIAL_CARDS_SUCCESS = "GET_INITIAL_CARDS_SUCCESS";

export const getInitialCards = () => dispatch => {
  dispatch({ type: GET_INITIAL_CARDS_START });
  axios
    .get(`${backendUrl}/api/students/cards`)
    .then(res =>
      dispatch({
        type: GET_INITIAL_CARDS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => dispatch({ payload: err, type: GET_INITIAL_CARDS_FAILURE }));
};
