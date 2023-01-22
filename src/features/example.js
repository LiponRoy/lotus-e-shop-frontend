// export const fetcherApi = createApi({
// 	reducerPath: 'fetcherApi',
// 	baseQuery: axiosBaseQuery({
// 		baseUrl: 'http://localhost:4000/',
// 	}),
// 	tagTypes: ['User'],
// 	endpoints(build) {
// 		return {
// 			//________Authentication
// 			registerUser: build.mutation({
// 				query: (form) => ({
// 					url: 'register',
// 					method: 'post',
// 					data: form,
// 				}),
// 				invalidatesTags: ['User'],
// 			}),

// 			loginUser: build.mutation({
// 				query: (form) => ({
// 					url: 'login',
// 					method: 'post',
// 					data: form,
// 				}),
// 				invalidatesTags: ['User'],
// 			}),

// 			getAuth: build.query({
// 				query: () => ({ url: 'auth', method: 'get' }),
// 			}),

// 			//__________User
// 			updateUserName: build.mutation({
// 				query: (...rest) => ({
// 					url: 'update-user',
// 					method: 'put',
// 					data: rest,
// 				}),
// 				invalidatesTags: ['User'],
// 			}),

// 			getUser: build.query({
// 				query: () => ({ url: 'user', method: 'get' }),
// 				providesTags: ['User'],
// 			}),

// 			//__________Profile
// 			postProfile: build.mutation({
// 				query: (form) => ({
// 					url: 'login',
// 					method: 'post',
// 					data: form,
// 				}),
// 			}),

// 			getAllProfiles: build.query({
// 				query: () => ({ url: 'all-profiles', method: 'get' }),
// 			}),

// 			getUserProfile: build.query({
// 				query: () => ({ url: 'profile/me', method: 'get' }),
// 			}),

// 			//___________Car
// 			postCar: build.mutation({
// 				query: (form) => ({
// 					url: 'new-car',
// 					method: 'post',
// 					data: form,
// 				}),
// 			}),

// 			putCar: build.mutation({
// 				query: ({ id, ...rest }) => ({
// 					url: `update-car/{id}`,
// 					method: 'put',
// 					data: { rest },
// 				}),
// 			}),

// 			getAllCars: build.query({
// 				query: () => ({ url: 'all-cars', method: 'get' }),
// 			}),

// 			getCarById: build.query({
// 				query: (id) => ({ url: `onecar/${id}`, method: 'get' }),
// 			}),

// 			getAllUserCars: build.query({
// 				query: () => ({ url: 'my-car', method: 'get' }),
// 			}),
// 		};
// 	},
// });

// export const {
// 	// ______Authentication______
// 	useGetAuthQuery,
// 	useRegisterUserMutation,
// 	useLoginUserMutation,
// 	//_______User_________
// 	useUpdateUserNameMutation,
// 	useGetUserQuery,
// 	//_____Profile_________
// 	useGetUserProfileQuery,
// 	useGetAllProfilesQuery,
// 	usePostProfileMutation,
// 	//_____Car____________
// 	usePostCarMutation,
// 	usePutCarMutation,
// 	useGetAllCarsQuery,
// 	useGetCarByIdQuery,
// 	useGetAllUserCarsQuery,
// } = fetcherApi;
