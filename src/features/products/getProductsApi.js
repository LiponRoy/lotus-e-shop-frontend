import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GetProductsApi = createApi({
	reducerPath: 'GetProductsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
	tagTypes: ['productMe'],
	endpoints: (builder) => ({
		getProductTasks: builder.query({
			query: () => '/product/getAll',
			transformResponse: (res) => res.reverse(),
			providesTags: ['productMe'],
		}),
	}),
});

export const { useGetProductTasksQuery } = GetProductsApi;
