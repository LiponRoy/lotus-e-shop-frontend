import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
// http://localhost:4000/api/auth/signin
export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/', credentials: 'include' }),
	tagTypes: ['myAuth'],
	endpoints: (builder) => ({
		signupAuth: builder.mutation({
			query: (other) => ({
				url: 'auth/signup',
				method: 'POST',
				body: { ...other },
			}),
			invalidatesTags: ['myAuth'],
		}),
		loginAuth: builder.mutation({
			query: (other) => ({
				url: 'auth/signin',
				method: 'POST',
				body: { ...other },
			}),
			invalidatesTags: ['myAuth'],
		}),
		logOut: builder.mutation({
			query: () => ({
				url: 'auth/logout',
				method: 'POST',
				// body,
			}),
			invalidatesTags: ['myAuth'],
		}),
		// logOut: builder.query({
		// 	query: () => ({ url: 'auth/logout', method: 'GET', providesTags: ['myAuth'] }),
		// }),
		getProfile: builder.query({
			query: () => ({ url: 'auth/getUserProfile', method: 'GET', providesTags: ['myAuth'] }),
		}),
		// getProfile: builder.query({
		// 	query: () => 'auth/getUserProfile',
		// 	providesTags: ['myAuth'],
		// }),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupAuthMutation, useLoginAuthMutation, useGetProfileQuery, useLogOutMutation } = authApi;
