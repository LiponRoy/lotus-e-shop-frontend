import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { url, setHeaders } from './api';
import { toast } from 'react-toastify';

const initialState = {
	items: [],
	status: null,
	createStatus: null,
};

export const productsCreate = createAsyncThunk('products/productsCreate', async (values) => {
	try {
		//const response = await axios.post(`${url}/products`, values, setHeaders());
		const response = await axios.post('/product/create', values);

		return response.data;
	} catch (error) {
		console.log(error);
		toast.error(error.response?.data);
	}
});

export const productsFetch = createAsyncThunk('products/productsFetch', async () => {
	try {
		const response = await axios.get('/product/getAll');

		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const productFetchOne = createAsyncThunk('products/productFetchOne', async ({ _id }) => {
	try {
		const response = await axios.get('/product/getOne/' + _id);
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(productsCreate.pending, (state) => {
				state.createStatus = 'pending';
			})
			.addCase(productsCreate.fulfilled, (state, action) => {
				//state.items.push(action.payload);
				state.items = [action.payload, ...state.items];
				state.createStatus = 'success';
				toast.success('product created Yeahoo!');
			})
			.addCase(productsCreate.rejected, (state, action) => {
				state.createStatus = 'rejected';
				toast.error('not created');
			})
			.addCase(productsFetch.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'success';
			})
			.addCase(productsFetch.rejected, (state, action) => {
				state.status = 'rejected';
			});
		// .addCase(productFetchOne.pending, (state) => {
		// 	state.status = 'pending';
		// })
		// .addCase(productFetchOne.fulfilled, (state, action) => {
		// 	state.items = action.payload;
		// 	state.status = 'success';
		// })
		// .addCase(productFetchOne.rejected, (state, action) => {
		// 	state.status = 'rejected';
		// });
	},
});

export default productsSlice.reducer;
