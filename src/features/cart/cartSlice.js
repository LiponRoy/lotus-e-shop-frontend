import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
	cartProducts: [],
	totalQuantity: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			let find = state.cartProducts.findIndex((item) => item._id === action.payload._id);
			if (find >= 0) {
				state.cartProducts[find].cartQuantity += 1;
				toast.success('quantity increased', { position: 'bottom-right' });
			} else {
				state.cartProducts.push(action.payload);
				toast.success('Added to cart', { position: 'bottom-right' });
			}
			console.log(action.payload_id);
		},

		decreaseQuantity(state, action) {
			const cartIndex = state.cartProducts.findIndex((item) => {
				return item._id === action.payload._id;
			});
			console.log(cartIndex);
			if (state.cartProducts[cartIndex].cartQuantity > 1) {
				state.cartProducts[cartIndex].cartQuantity -= 1;
			}
		},

		IncreaseQuantity(state, action) {
			const cartIndex = state.cartProducts.findIndex((item) => {
				return item._id === action.payload._id;
			});
			if (state.cartProducts[cartIndex].cartQuantity >= 1) {
				state.cartProducts[cartIndex].cartQuantity += 1;
			}
		},

		TotalsAmmount(state, action) {
			let { total, quantity } = state.cartProducts.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				},
			);
			total = parseFloat(total.toFixed(2));
			state.totalQuantity = quantity;
			state.totalPrice = total;
		},
		removeAllCart(state, action) {
			state.cartProducts = [];
			toast.success('removed All', { position: 'bottom-right' });
		},
		removeCart(state, action) {
			const deleteItem = state.cartProducts.filter((product) => {
				return product._id !== action.payload._id;
			});
			state.cartProducts = deleteItem;
			toast.success('removed cart', { position: 'bottom-right' });
		},
	},
});

export const { addToCart, removeCart, removeAllCart, decreaseQuantity, IncreaseQuantity, TotalsAmmount } = cartSlice.actions;
export default cartSlice.reducer;
