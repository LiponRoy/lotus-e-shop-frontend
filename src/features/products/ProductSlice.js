import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URI = 'https://liponroy-lotus-e-shop-backend-api-2023.onrender.com/api';

const initialState = {
	dataAll: [],
	singleData: {},
	isError: false,
	isLoading: false,
	message: '',

	// for price filtering
	minPrice: 0,
	maxPrice: 0,
};

// Create new goal
export const productsCreate = createAsyncThunk('product/productsCreate', async (values, thunkAPI) => {
	try {
		// const response = await axios.post(`${BASE_URI}/product/create`, values);
		const response = await axios.post(`${BASE_URI}/product/create`, values);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Get user goals
export const productsFetch = createAsyncThunk('product/productsFetch', async (_, thunkAPI) => {
	try {
		// const response = await axios.get(`${BASE_URI}/product/getAll`);
		const response = await axios.get(`${BASE_URI}/product/getAll`);
		return response.data;
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Delete user goal
export const productFetchOne = createAsyncThunk('product/productFetchOne', async (id, thunkAPI) => {
	try {
		const response = await axios.get(`${BASE_URI}/product/getOne/${id}`);
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

		GET_PRICE_RANGE(state, action) {
			const { dataAll } = action.payload;
			const array = [];
			dataAll.map((product) => {
				const price = product.price;
				return array.push(price);
			});
			const max = Math.max(...array);
			const min = Math.min(...array);

			state.minPrice = min;
			state.maxPrice = max;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(productsCreate.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(productsCreate.fulfilled, (state, action) => {
				state.isLoading = false;
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
				state.singleData = action.payload;
			})
			.addCase(productFetchOne.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset, GET_PRICE_RANGE } = productSlice.actions;
export default productSlice.reducer;
