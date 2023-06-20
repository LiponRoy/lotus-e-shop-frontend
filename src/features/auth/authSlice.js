import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URI = 'https://liponroy-lotus-e-shop-backend-api-2023.onrender.com/api';

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
	sentEmail: null,
	resetNewPassword: null,
};

// Register user
export const registerApi = createAsyncThunk('auth/registerApi', async (user, thunkAPI) => {
	try {
		// const response = await axios.post(`${BASE_URI}/auth/signup`, user);
		const response = await axios.post(`${BASE_URI}/auth/signup`, user);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Login user
export const loginApi = createAsyncThunk('auth/loginApi', async (user, thunkAPI) => {
	try {
		// const response = await axios.post(BASE_URI + '/auth/signin', user);
		const response = await axios.post(`${BASE_URI}/auth/signin`, user);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const logoutApi = createAsyncThunk('auth/logoutApi', async (thunkAPI) => {
	try {
		// const response = await axios.post(BASE_URI + '/auth/logout');
		const response = await axios.post(`${BASE_URI}/auth/logout`);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// reset Password All
// Sent Email for reset password
export const forgetPasswordApi = createAsyncThunk('auth/forgetPasswordApi', async (userEmail, thunkAPI) => {
	try {
		// const response = await axios.post(BASE_URI + '/auth/signup', user);
		const response = await axios.post(`${BASE_URI}/auth/forgotPassword`, userEmail);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});
// reset new Password
export const newPasswordApi = createAsyncThunk('auth/newPasswordApi', async (resetToken, password, thunkAPI) => {
	try {
		// const response = await axios.post(BASE_URI + '/auth/signup', user);
		const response = await axios.put(`${BASE_URI}/auth/passwordReset/${resetToken}`, password);
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
	extraReducers: (builder) => {
		builder
			.addCase(registerApi.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerApi.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(registerApi.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(loginApi.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginApi.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(loginApi.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logoutApi.fulfilled, (state) => {
				state.user = null;
			})
			.addCase(forgetPasswordApi.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(forgetPasswordApi.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.sentEmail = action.payload;
			})
			.addCase(forgetPasswordApi.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.sentEmail = null;
			})
			.addCase(newPasswordApi.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(newPasswordApi.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.resetNewPassword = action.payload;
			})
			.addCase(newPasswordApi.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.resetNewPassword = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
