import { faLowVision } from '@fortawesome/free-solid-svg-icons';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const LOGIN_URL = process.env.REACT_APP_BASE_URL;
export const loginApiSlice = createApi({
    reducerPath: 'loginApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${LOGIN_URL}/v1/user`,
        prepareHeaders: (headers) => {
            const refreshToken=localStorage.getItem("refreshToken")
            
            const deviceId = '12345678';
            headers.set('Content-Type', 'application/json');
            headers.set('device-id', deviceId);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/login',
                method: 'POST',
                body: { email, password },
            }),
        }),
        register: builder.mutation({
            query: (newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser,
            }),
        }),
        refreshtoken: builder.mutation({
            
            query: () => ({
                
                url: '/refresh-token',
                method: 'POST',
                body: {refreshToken: localStorage.getItem(' refreshToken') }
            }),
        }),
        getuser:builder.query({
            query:()=>({
                url:'/app/6673ee301f571e304d9d2941',
                method:'GET'
            })
        })

    }),
});

export const { useLoginMutation, useRegisterMutation, useRefreshtokenMutation } = loginApiSlice;
