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
		FILTER_BY_CATEGORY(state, action) {
			// console.log(action.payload);
			const { dataAll, cat } = action.payload;
			let tempProduct = [];

			if (cat === 'All') {
				tempProduct = dataAll;
			} else {
				tempProduct = dataAll.filter((prod) => prod.brand === cat);
			}

			state.filteredProducts = tempProduct;
		},
		FILTER_BY_PRICE(state, action) {
			const { dataAll, price } = action.payload;
			let tempProducts = [];
			tempProducts = dataAll.filter((product) => product.price <= price);
	  
			state.filteredProducts = tempProducts;
		  },
	},
});

export const { FILTER_BY_SEARCH, FILTER_BY_SORT, FILTER_BY_CATEGORY,FILTER_BY_PRICE } = filterSlice.actions;

// export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
