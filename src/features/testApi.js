import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
// http://localhost:4000/api/auth/signin
export const testApi = createApi({
	reducerPath: 'testApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
	tagTypes: ['myTest'],
	endpoints: (builder) => ({
		testInsert: builder.mutation({
			query: (other) => ({
				url: 'test/testMe',
				method: 'POST',
				body: other,
			}),
			invalidatesTags: ['myTest'],
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useTestInsertMutation } = testApi;
