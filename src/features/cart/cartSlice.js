import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	cartProducts: [],
	cartTotalQuantity: 1,
	cartTotalAmount: 1,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
