export const backendUrl = 'https://halg-backend.herokuapp.com';
export const frontendUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://lambdashowcase.netlify.com';