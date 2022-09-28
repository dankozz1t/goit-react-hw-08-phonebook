import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => '/users/current',

      providesTags: ['auth'],
    }),

    userSignup: builder.mutation({
      query: user => {
        console.log(user);
        return {
          url: `/users/signup`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['auth'],
    }),

    userLogin: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['auth'],
    }),

    userLogout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useFetchCurrentUserQuery,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserSignupMutation,
} = authAPI;
