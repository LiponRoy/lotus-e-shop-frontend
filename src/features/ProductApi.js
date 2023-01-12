import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProductApi = createApi({
	reducerPath: 'ProductApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
	tagTypes: ['product'],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => 'product/getAll',
			transformResponse: (res) => res.reverse(),
			providesTags: ['product'],
		}),
	}),
});

export const { useGetTasksQuery } = ProductApi;
