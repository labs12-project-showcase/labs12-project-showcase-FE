import history from '../history.js';
import auth0 from 'auth0-js';
import axios from 'axios';
import axiosAuth from './axiosAuth.js';
import { frontendUrl, backendUrl } from '../config/urls.js';
import {
  GET_PROFILE_DATA_START,
  GET_PROFILE_DATA_FAILURE,
  GET_PROFILE_DATA_SUCCESS,
} from '../components/student/profileqs/profileqsActions.js';

const auth = new auth0.WebAuth({
  domain: 'lambdashowcase.auth0.com',
  clientID: 'o3k0Zn0QhhLv7KdWupY8I9j9uAIlqwDQ',
  redirectUri: `${frontendUrl}/callback`,
  responseType: 'token id_token',
  scope: 'openid email profile',
  audience: 'https://hirelambdastudents.auth0.com/api/v2/',
});

export const LOGOUT = 'LOGOUT';
export const SET_SESSION = 'SET_SESSION';
export const LOGGING_IN = 'LOGGING_IN';

export const login = params => dispatch => {
  dispatch({ type: LOGGING_IN });
  auth.authorize({
    connection: 'github',
  });
};

export const adminLogin = params => dispatch => {
  dispatch({ type: LOGGING_IN });
  auth.authorize({
    connection: 'Username-Password-Authentication',
  });
};

export const logout = params => dispatch => {
  dispatch({ type: LOGOUT });
  auth.logout({
    returnTo: window.location.origin,
  });
  localStorage.removeItem('backendToken');
};

export const handleAuth = () => dispatch => {
  auth.parseHash((err, results) => {
    history.push('/callback');
    dispatch({
      type: SET_SESSION,
      payload: {
        accessToken: results.accessToken,
        idToken: results.idToken,
      },
    });

    const whichRole =
      results.idTokenPayload.sub.substring(0, 6) === 'github' ? 1 : 2;

    const send = {
      email: results.idTokenPayload.email,
      name: results.idTokenPayload.name,
      role_id: whichRole,
      sub_id: results.idTokenPayload.sub,
    };

    axios
      .post(`${backendUrl}/api/auth/login`, send)
      .then(resLogin => {
        localStorage.setItem('backendToken', resLogin.data);

        if (whichRole === 2) {
          history.replace('/admin/students-table');
        } else {
          dispatch({ type: GET_PROFILE_DATA_START });
          axiosAuth()
            .get(`${backendUrl}/api/students/profile`)
            .then(resGetProf => {
              let noNulls = {};
              for (let item in resGetProf.data) {
                if (resGetProf.data[item] !== null) {
                  noNulls[item] = resGetProf.data[item];
                }
              }
              dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: noNulls });
              if (resLogin.status === 200) {
                history.replace(`/student/profile/${resGetProf.data.id}`);
              } else if (resLogin.status === 201) {
                history.replace('/profile-quick-start');
              } else {
                history.replace('/');
              }
            })
            .catch(err => {
              dispatch({ type: GET_PROFILE_DATA_FAILURE, payload: err });
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
};
