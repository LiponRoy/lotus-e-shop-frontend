import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ProductApi } from '../features/ProductApi';

export const store = configureStore({
	reducer: {
		[ProductApi.reducerPath]: ProductApi.reducer,
	},

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductApi.middleware),
});
