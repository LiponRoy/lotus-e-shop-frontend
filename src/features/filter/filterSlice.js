import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filteredProducts: [],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		FILTER_BY_SEARCH(state, action) {
			// console.log(action.payload);
			const { dataAll, searchProduct } = action.payload;
			const tempProducts = dataAll.filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()) || product.desc.toLowerCase().includes(searchProduct.toLowerCase()));

			state.filteredProducts = tempProducts;
		},
	},
});

export const { FILTER_BY_SEARCH } = filterSlice.actions;

// export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
