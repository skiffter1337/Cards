import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { SignUpData, UpdateProfileType, User } from './types.ts'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Me'],
  endpoints: builder => ({
    me: builder.query<User | null, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
      providesTags: ['Me'],
    }),
    updateUserInfo: builder.mutation<User, UpdateProfileType>({
      query: body => ({
        url: 'v1/auth/me',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
    login: builder.mutation<void, { email: string; password: string }>({
      query: body => ({
        url: 'v1/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<SignUpData, { email: string; password: string }>({
      query: body => ({
        url: 'v1/auth/sign-up',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'v1/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch }) {
        dispatch(
          authApi.util.updateQueryData('me', undefined, () => {
            return null
          })
        )
      },
    }),
    recoverPassword: builder.mutation<void, { html: string; email: string }>({
      query: ({ html, email }) => ({
        url: 'v1/auth/recover-password',
        method: 'POST',
        body: { html, email },
      }),
    }),
    resetPassword: builder.mutation<void, { password: string; token: string }>({
      query: ({ password, token }) => ({
        url: `v1/auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
})

export const {
  useMeQuery,
  useUpdateUserInfoMutation,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authApi
