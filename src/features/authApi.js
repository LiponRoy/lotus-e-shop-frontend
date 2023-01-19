import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
// http://localhost:4000/api/auth/signin
export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
	tagTypes: ['myAuth'],
	endpoints: (builder) => ({
		signupAuth: builder.mutation({
			query: (credentials) => ({
				url: 'auth/signup',
				method: 'POST',
				body: { ...credentials },
			}),
			invalidatesTags: ['myAuth'],
		}),
		loginAuth: builder.mutation({
			query: (credentials) => ({
				url: 'auth/signin',
				method: 'POST',
				body: { ...credentials },
			}),
			invalidatesTags: ['myAuth'],
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupAuthMutation, useLoginAuthMutation } = authApi;
