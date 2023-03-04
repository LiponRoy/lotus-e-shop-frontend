import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import goalService from './goalService';

const initialState = {
	dataAll: [],
	singleData: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Create new goal
export const productsCreate = createAsyncThunk('product/productsCreate', async (values, thunkAPI) => {
	try {
		const response = await axios.post('/api/product/create', values);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Get user goals
export const productsFetch = createAsyncThunk('product/productsFetch', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/api/product/getAll');
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Delete user goal
export const productFetchOne = createAsyncThunk('product/productFetchOne', async (id, thunkAPI) => {
	try {
		const response = await axios.get('/api/product/getOne/' + id);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(productsCreate.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(productsCreate.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.dataAll.push(action.payload);
			})
			.addCase(productsCreate.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(productsFetch.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.dataAll = action.payload;
			})
			.addCase(productsFetch.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(productFetchOne.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(productFetchOne.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.singleData = action.payload;
			})
			.addCase(productFetchOne.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
