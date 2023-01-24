import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'http://localhost:4000/api/';

// InitialState
const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};
// user: null,
// isError: false,
// isLoading: false,
// message: '',

// register user
export const SignupApi = createAsyncThunk('auth/signup', async (user, thunkAPI) => {
	try {
		const response = await axios.post(BASE_URL + 'auth/signup', user);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});
// Login user
export const LoginApi = createAsyncThunk('auth/signin', async (user, thunkAPI) => {
	try {
		const response = await axios.post(BASE_URL + 'auth/signin', user);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Logout user
export const LogoutApi = createAsyncThunk('auth/logout', async (thunkAPI) => {
	try {
		const response = await axios.post(BASE_URL + 'auth/logout');
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = '';
		},
	},
	extraReducers: (bulder) => {
		bulder
			.addCase(SignupApi.pending, (state, action) => {
				state.isError = false;
				state.isSuccess = false;
				state.isLoading = true;
				state.message = '';
			})
			.addCase(SignupApi.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isError = false;
				state.isSuccess = true;
				state.isLoading = false;
				state.message = '';
			})
			.addCase(SignupApi.rejected, (state, action) => {
				state.user = null;
				state.isError = true;
				state.isSuccess = false;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(LoginApi.pending, (state, action) => {
				state.isError = false;
				state.isSuccess = false;
				state.isLoading = true;
				state.message = '';
			})
			.addCase(LoginApi.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isError = false;
				state.isSuccess = true;
				state.isLoading = false;
				state.message = '';
			})
			.addCase(LoginApi.rejected, (state, action) => {
				state.isError = true;
				state.isSuccess = false;
				state.isLoading = false;
				state.message = action.payload;
			})
			.addCase(LogoutApi.fulfilled, (state, action) => {
				state.user = null;
				// state.isError = false;
				// state.isSuccess = true;
				// state.isLoading = false;
				// state.message = '';
			});
	},
	// extraReducers: {
	// 	[registerMe.pending]: (state, action) => {
	// 		return {
	// 			...state,
	// 			signUpStatus: 'pending',
	// 			signUpError: '',
	// 			loginStatus: '',
	// 			loginError: '',
	// 			logOutStatus: '',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	[registerMe.fulfilled]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: action.payload,
	// 			signUpStatus: 'fulfilled',
	// 			signUpError: '',
	// 			loginStatus: '',
	// 			loginError: '',
	// 			logOutStatus: '',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	[registerMe.rejected]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: null,
	// 			signUpStatus: 'rejected',
	// 			signUpError: action.payload,
	// 			loginStatus: '',
	// 			loginError: '',
	// 			logOutStatus: '',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	// for login task
	// 	[loginMe.pending]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: null,
	// 			signUpStatus: '',
	// 			signUpError: '',
	// 			loginStatus: 'pending',
	// 			loginError: '',
	// 			logOutStatus: '',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	[loginMe.fulfilled]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: action.payload,
	// 			signUpStatus: '',
	// 			signUpError: '',
	// 			loginStatus: 'fulfilled',
	// 			loginError: '',
	// 			logOutStatus: '',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	[loginMe.rejected]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: null,
	// 			signUpStatus: '',
	// 			signUpError: '',
	// 			loginStatus: 'rejected',
	// 			loginError: action.payload,
	// 			logOutStatus: '',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	// logOut task
	// 	[logoutMe.pending]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: null,
	// 			signUpStatus: '',
	// 			signUpError: '',
	// 			loginStatus: '',
	// 			loginError: '',
	// 			logOutStatus: 'pending',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	[logoutMe.fulfilled]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: null,
	// 			signUpStatus: '',
	// 			signUpError: '',
	// 			loginStatus: '',
	// 			loginError: '',
	// 			logOutStatus: 'fulfilled',
	// 			logOutError: '',
	// 		};
	// 	},
	// 	[logoutMe.rejected]: (state, action) => {
	// 		return {
	// 			...state,
	// 			user: null,
	// 			signUpStatus: '',
	// 			signUpError: '',
	// 			loginStatus: '',
	// 			loginError: '',
	// 			logOutStatus: 'rejected',
	// 			logOutError: action.payload,
	// 		};
	// 	},
	// },
});

//export const { reset } = authSlice.actions;
export default authSlice.reducer;
