export const backendUrl =
	process.env.NODE_ENV === 'development' && process.env.TESTING_LOCAL_BACKEND === 'yespls'
		? 'http://localhost:5000'
		: 'https://halg-backend.herokuapp.com';
		
export const frontendUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://lambdashowcase.netlify.com';