import axios from 'axios';

const API_URL = 'http://localhost:4000/api/';

// Register user
const register = async (userData) => {
	const response = await axios.post(API_URL + 'auth/signup', userData);

	// if (response.data) {
	// 	localStorage.setItem('user', JSON.stringify(response.data));
	// }

	return response.data;
};

// Login user
const login = async (userData) => {
	const response = await axios.post(API_URL + 'auth/signin', userData);

	// if (response.data) {
	// 	localStorage.setItem('user', JSON.stringify(response.data));
	// }

	return response.data;
};

// Logout user
const logout = async () => {
	const response = await axios.post(API_URL + 'auth/logout');

	// if (response.data) {
	// 	localStorage.setItem('user', JSON.stringify(response.data));
	// }

	return response.data;
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
