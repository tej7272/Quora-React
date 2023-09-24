import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const user = JSON.parse(localStorage.getItem("user"))

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://academics.newtonschool.co/api/v1',

    }),
    endpoints:(builder)=>({
           
        Comment: builder.query({
            query:(postId)=>{
                return{
                    url:(`/quora/post/${postId}/comments`),
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'projectId': 'bc73q6nn4srr',
                        'Authorization':`Bearer ${user?.token}`
                    },
                }
            }
        }),
        
       
    })
})

export const {
    useCommentQuery,
} = authApi;