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
		FILTER_BY_SORT(state, action) {
			const { dataAll, sort } = action.payload;
			console.log(action.payload);
			let tempProduct = [];
			if (sort === 'latest') {
				tempProduct = dataAll;
			}
			if (sort === 'lowest-price') {
				tempProduct = dataAll.slice().sort((a, b) => a.price - b.price);
			}
			if (sort === 'hight-price') {
				tempProduct = dataAll.slice().sort((a, b) => b.price - a.price);
			}
			if (sort === 'a-z') {
				tempProduct = dataAll.slice().sort((a, b) => a.name.localeCompare(b.name));
			}
			if (sort === 'z-a') {
				tempProduct = dataAll.slice().sort((a, b) => b.name.localeCompare(a.name));
			}

			state.filteredProducts = tempProduct;
		},
	},
});

export const { FILTER_BY_SEARCH, FILTER_BY_SORT } = filterSlice.actions;

// export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
