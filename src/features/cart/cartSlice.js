import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	cartProducts: [],
	cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCartTwo(state, action) {
			let find = state.cartProducts.findIndex((item) => item._id === action.payload._id);
			if (find >= 0) {
				state.cartProducts[find].cartQuantity += 1;
			} else {
				state.cartProducts.push(action.payload);
			}
			console.log(action.payload_id);
		},
		removeCart(state, action) {
			const deleteItem = state.cartProducts.filter((product) => {
				return product._id !== action.payload._id;
			});
			state.cartProducts = deleteItem;
		},
	},
});

export const { addToCartTwo, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
