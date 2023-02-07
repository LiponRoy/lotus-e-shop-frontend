import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { url, setHeaders } from './api';
import { toast } from 'react-toastify';

const initialState = {
	items: [],
	status: null,
	createStatus: null,
};

export const productsFetch = createAsyncThunk('products/productsFetch', async () => {
	try {
		const response = await axios.get('/product/getAll');

		return response.data;
	} catch (error) {
		console.log(error);
	}
});

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

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	// extraReducers: {
	// 	[productsFetch.pending]: (state, action) => {
	// 		return {
	// 			...state,
	// 			status: 'pending',
	// 		};
	// 	},
	// 	[productsFetch.fulfilled]: (state, action) => {
	// 		return {
	// 			...state,
	// 			items: action.payload,
	// 			status: 'success',
	// 		};
	// 	},
	// 	[productsFetch.rejected]: (state, action) => {
	// 		return {
	// 			status: 'rejected',
	// 		};
	// 	},
	// 	[productsCreate.pending]: (state, action) => {
	// 		return {
	// 			...state,
	// 			createStatus: 'pending',
	// 		};
	// 	},
	// 	[productsCreate.fulfilled]: (state, action) => {
	// 		return {
	// 			items: [action.payload, ...state.items],
	// 			createStatus: 'success',
	// 			// toast.success('Product Created!'),
	// 		};
	// 	},
	// 	[productsCreate.rejected]: (state, action) => {
	// 		return {
	// 			status: 'rejected',
	// 		};
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(productsFetch.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'success';
			})
			.addCase(productsFetch.rejected, (state, action) => {
				state.status = 'rejected';
			})
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
			});
	},
});

export default productsSlice.reducer;
