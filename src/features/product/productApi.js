import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
	tagTypes: ['product'],
	endpoints: (builder) => ({
		// getTasks: builder.query({
		// 	query: () => 'goal/getall',
		// 	transformResponse: (res) => res.reverse(),
		// 	providesTags: ['myGoal'],
		// 	//transformResponse: (response) => response.sort((a, b) => b.id - a.id),
		// }),
		// getOneTask: builder.query({
		// 	query: (id) => `goal/getSingle/${id}`,
		// 	providesTags: ['myGoal'],
		// }),
		createProduct: builder.mutation({
			query: (newTask) => ({
				url: 'product/create',
				method: 'POST',
				body: newTask,
			}),
			invalidatesTags: ['product'],
		}),
		// updateStudent: builder.mutation({
		// 	query: ({ _id, ...rest }) => ({
		// 		url: `goal/update/${_id}`,
		// 		method: 'PUT',
		// 		body: rest,
		// 	}),
		// 	invalidatesTags: ['myGoal'],
		// }),
		// deleteTask: builder.mutation({
		// 	query: (taskId) => ({
		// 		url: `goal/remove/${taskId}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: ['myGoal'],
		// }),
	}),
});

export const { useCreateProductMutation } = productApi;
