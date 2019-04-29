import history from '../history';
import auth0 from 'auth0-js';
import axios from 'axios';
import { connect } from 'react-redux';
import { login, setSession } from './authActions.js';
import { frontendUrl, backendUrl } from '../config/urls.js';

export default class Auth {
	accessToken;
	idToken;
	expiresAt;

	auth0 = new auth0.WebAuth({
		domain: 'lambdashowcase.auth0.com',
		clientID: 'o3k0Zn0QhhLv7KdWupY8I9j9uAIlqwDQ',
		redirectUri: `${frontendUrl}/callback`,
		responseType: 'token id_token',
		scope: 'openid email profile',
		audience: 'https://lambdashowcase.auth0.com/api/v2/'
	});

	constructor() {
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.isAuthenticated = this.isAuthenticated.bind(this);
		this.getAccessToken = this.getAccessToken.bind(this);
		this.getIdToken = this.getIdToken.bind(this);
		this.renewSession = this.renewSession.bind(this);
	}

	login() {
		this.auth0.authorize();
	}

	register(payload) {
		console.log('register payload', payload);

		// authLogin(payload);

		// const send = {
		// 	email: payload.email,
		// 	name: payload.name,
		// 	role_id: 1,
		// 	sub_id: payload.sub
		// };
		// console.log('send payload', send);
		// axios
		// 	.post(`${backendUrl}/api/auth/login`, send)
		// 	.then(res => {
		// 		console.log('response from registering', res);
		// 		localStorage.setItem('backendToken', res.data);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}

	handleAuthentication() {
		this.auth0.parseHash((err, authResult) => {
			console.log('auth result', authResult);
			if (authResult && authResult.accessToken && authResult.idToken) {

				this.register(authResult.idTokenPayload);
				this.setSession(authResult);

				history.replace('profile-quick-start');

			} else if (err) {
				history.replace('/');
				console.log(err);
				alert(`Error: ${err.error}. Check the console for further details.`);
			}
		});
	}

	getAccessToken() {
		return this.accessToken;
	}

	getIdToken() {
		return this.idToken;
	}

	setSession(authResult) {
		// Set isLoggedIn flag in localStorage
		localStorage.setItem('isLoggedIn', 'true');

		// Set the time that the access token will expire at
		let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
		this.accessToken = authResult.accessToken;
		this.idToken = authResult.idToken;
		this.expiresAt = expiresAt;

		// authSetSession(authResult);

		// navigate to the home route
		history.replace('/profile-quick-start');
	}

	renewSession() {
		this.auth0.checkSession({}, (err, authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				this.setSession(authResult);
			} else if (err) {
				this.logout();
				console.log(err);
				alert(
					`Could not get a new token (${err.error}: ${err.error_description}).`
				);
			}
		});
	}

	logout() {
		// Remove tokens and expiry time
		this.accessToken = null;
		this.idToken = null;
		this.expiresAt = 0;

		// Remove isLoggedIn flag from localStorage
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('backendToken');

		this.auth0.logout({
			returnTo: window.location.origin
		});

		// navigate to the home route
		history.replace('/home');
	}

	isAuthenticated() {
		// Check whether the current time is past the
		// access token's expiry time
		let expiresAt = this.expiresAt;
		return new Date().getTime() < expiresAt;
	}
}
