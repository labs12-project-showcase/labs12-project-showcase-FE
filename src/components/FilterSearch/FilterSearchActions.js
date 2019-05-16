import axios from 'axios';

import { backendUrl } from '../../config/urls.js';

export const GET_FILTERED_CARDS_FAILURE = 'GET_FILTERED_CARDS_FAILURE';
export const GET_FILTERED_CARDS_START = 'GET_FILTERED_CARDS_START';
export const GET_FILTERED_CARDS_SUCCESS = 'GET_FILTERED_CARDS_SUCCESS';

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
  dispatch({ type: GET_FILTERED_CARDS_START });

  const badgeString = badge ? '&badge=true' : '';
  const desLocString =
    filterDesLoc && location && location.value ? '&filterDesLoc=true' : '';
  const lat = location && location.value.lat ? location.value.lat : null;
  const lon = location && location.value.lon ? location.value.lon : null;
  const latLonString = lat && lon ? `&lat=${lat}&lon=${lon}` : '';
  const searchString = search ? `&search=${search}` : '';
  const tracks = `${fullStack ? '1' : ''}${ios ? '2' : ''}${
    dataScience ? '3' : ''
  }${android ? '4' : ''}${uiux ? '5' : ''}`;
  const tracksString = `?tracks=${tracks === '' ? 'none' : tracks}`;
  const withinString = lat && lon && within ? `&within=${within}` : '';

  const queryString =
    // tracks must go first
    tracksString +
    badgeString +
    desLocString +
    latLonString +
    searchString +
    withinString;
  // console.log('query string', queryString);

  axios
    .get(`${backendUrl}/api/students/cards/filter${queryString}`)
    .then(res => {
      dispatch({
        type: GET_FILTERED_CARDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_FILTERED_CARDS_FAILURE,
        payload: err
      });
    });
};

export const GET_INITIAL_CARDS_FAILURE = 'GET_INITIAL_CARDS_FAILURE';
export const GET_INITIAL_CARDS_START = 'GET_INITIAL_CARDS_START';
export const GET_INITIAL_CARDS_SUCCESS = 'GET_INITIAL_CARDS_SUCCESS';

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
