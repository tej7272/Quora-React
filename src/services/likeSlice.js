import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    likes : [],
    loading : false,
    error : ""
};

export const addLikeCount = createAsyncThunk('addlikecount', async(postId) => {
    const url = `https://academics.newtonschool.co/api/v1/quora/like/${postId}`;

    const options = {
        method : 'post',
        headers : {
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('user'))?.token}`,
            projectId: `bc73q6nn4srr`,
        },
        body: {
            postId: `${postId}`,
          },
    }

    const res = await fetch(url, options);

    if(res.ok){
        const data = await res.json();
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
})



export const deleteLikeCount = createAsyncThunk('deletelikecount', async(postId) => {
    const url = `https://academics.newtonschool.co/api/v1/quora/like/${postId}`;

    const options = {
        method : 'delete',
        headers : {
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('user'))?.token}`,
            projectId: `bc73q6nn4srr`,
        },
    }

    const res = await fetch(url, options);

    if(res.ok){
        const data = await res.json();
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
})

const likeSlice = createSlice({
    name:'like',
    initialState,
    reducers:{

    },
    extraReducers : builder => {
        builder
        .addCase(addLikeCount.pending, state => {
            state.loading = true;
        })
        .addCase(addLikeCount.fulfilled, (state, action) => {
            state.loading = false;
            state.likes = action.payload.likes;
        })
        .addCase(addLikeCount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error
        })
        .addCase(deleteLikeCount.pending, state => {
            state.loading = true;
        })
        .addCase(deleteLikeCount.fulfilled, (state, action) => {
            state.loading = false;
            state.likes = action.payload.likes;
        })
        .addCase(deleteLikeCount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default likeSlice.reducer;