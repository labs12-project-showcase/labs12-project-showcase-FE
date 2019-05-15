import axios from "axios";
import { backendUrl } from "../../config/urls.js";
export const FETCH_CARDS = "FETCH_CARDS";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";
export const UPDATE_FILTERED_CARDS = "UPDATE_FILTERED_CARDS";
export const UPDATE_FILTERED_CARDS_FAILURE = "UPDATE_FILTERED_CARDS_FAILURE";

export const homeData = () => dispatch => {
  console.log("fetching");
  axios
    .get(`${backendUrl}/api/students/cards`)
    .then(res => res.data)

    .then(cards =>
      dispatch({
        type: FETCH_CARDS,
        payload: cards
      })
    );
};
export const getFilteredCards = ({
  android,
  badge,
  dataScience,
  filterDesLoc,
  fullStack,
  ios,
  location,
  search,
  uiux,
  within
}) => dispatch => {
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

  const queryString =
    tracksString +
    badgeString +
    withinString +
    latLonString +
    desLocString +
    searchString;
  console.log("query string", queryString);

  axios
    .get(`${backendUrl}/api/students/cards/filter${queryString}`)
    .then(res => {
      dispatch({
        type: UPDATE_FILTERED_CARDS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UPDATE_FILTERED_CARDS_FAILURE,
        payload: err
      });
    });
};
