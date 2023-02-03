import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import productsReducer from '../features/products/productsSlice.js';
import { getProductsApi } from '../features/products/getProductsApi.js';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	// for redux toolkit
	auth: authSlice,
	products: productsReducer,
	//for RTK Query
	[getProductsApi.reducerPath]: getProductsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// Redux persist
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(getProductsApi.middleware),
});

export const persistor = persistStore(store);
