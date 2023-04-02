import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	cartProducts: [],
	cartTotalQuantity: 1,
	cartTotalAmount: 1,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			// if get any item then return 0 or 1 or 2 and so on
			// but Don't get any item then it return -1
			const index = state.cartProducts.findIndex((indexItem) => {
				indexItem.id === action.payload.id;
			});
			// if it get zero or upper value
			if (index.length >= 0) {
				// no item added only cartTotalQuantity incress value
				state.cartProducts[index].cartTotalQuantity += 1;
			} else {
				// added total value
				const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
				state.cartProducts.push(tempProduct);
			}

			//......................
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
