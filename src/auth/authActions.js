import history from '../history.js';
import auth0 from 'auth0-js';
import axios from 'axios';
// import axiosAuth from './axiosAuth.js';
import { frontendUrl, backendUrl } from '../config/urls.js';

const auth = new auth0.WebAuth({
  domain: 'lambdashowcase.auth0.com',
  clientID: 'o3k0Zn0QhhLv7KdWupY8I9j9uAIlqwDQ',
  redirectUri: `${frontendUrl}/callback`,
  responseType: 'token id_token',
  scope: 'openid email profile',
  audience: 'https://lambdashowcase.auth0.com/api/v2/'
});

export const LOGOUT = 'LOGOUT';
export const SET_SESSION = 'SET_SESSION';
export const LOGGING_IN = 'LOGGING_IN';

export const login = params => dispatch => {
  dispatch({ type: LOGGING_IN });
  auth.authorize();
}

export const logout = params => dispatch => {

  dispatch({ type: LOGOUT });

  auth.logout({
    returnTo: window.location.origin
  });

  history.replace('/home');
};

export const handleAuth = () => dispatch => {
  console.log('action login');

  auth.parseHash((err, results) => {

    console.log('handle auth stuff', results);
    const send = {
      email: results.idTokenPayload.email,
      name: results.idTokenPayload.name,
      role_id: 1,
      sub_id: results.idTokenPayload.sub
    };

    axios
    .post(`${backendUrl}/api/auth/login`, send)
    .then(res => {
      console.log('response from registering', res);
      localStorage.setItem('backendToken', res.data);
      history.replace('/profile-quick-start');

      console.log('action setSession');
      let expiresAt = results.expiresIn * 1000 + new Date().getTime();
      dispatch({
        type: SET_SESSION,
        payload: {
          accessToken: results.accessToken,
          idToken: results.idToken,
          expiresAt: expiresAt
        }
      });

    })
    .catch(err => {
      console.log(err);
    });
  }

)};