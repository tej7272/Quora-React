import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    loading: false,
    error: ""
}


export const addComments = createAsyncThunk('addcomments', async ({postId, commentValue}) => {
    const url = `https://academics.newtonschool.co/api/v1/quora/comment/${postId}`;

    const options = {
        method: 'POST',
        headers: {
            projectId: 'bc73q6nn4srr',
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('user'))?.token}`,
            "Content-Type": "application/json",
        },
            body: JSON.stringify({ content: commentValue }),
    }

    const res = await fetch(url, options);
    if(res.ok){
        const data = await res.json();
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error("error", errorData.message)
    }
})

const CommentSlice = createSlice({
    name :"comments",
    initialState,
    reducers :{

    },
    extraReducers: builder=>{
        builder
        .addCase(addComments.pending, state =>{
            state.loading = true;
        })
        .addCase(addComments.fulfilled, (state, action)=>{
            state.loading = false;
            state.comments = action.payload.comments;
        })
        .addCase(addComments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default CommentSlice.reducer;