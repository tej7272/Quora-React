import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const user = JSON.parse(localStorage.getItem("user"))

const productsHeader = {
    'Content-Type': 'application/json',
    projectId: 'bc73q6nn4srr',
    Authorization: `Bearer ${user?.token}`
}

const baseUrl = 'https://academics.newtonschool.co/api/v1';

const createRequest = (url) => ({ url, headers: productsHeader });


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPostData: builder.query({
            query: () => createRequest(`/quora/post?limit=100`)
        }),
        Comment: builder.query({
            query: (postId) => createRequest(`/quora/post/${postId}/comments`)
        }),
    })
})

export const { useCommentQuery, useGetPostDataQuery } = productApi;