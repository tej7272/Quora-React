import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"))


const initialState = {
    space: [],
    loading: false,
    error:''
}

export const createSpace = createAsyncThunk('createslice', async (spaceData) => {

    const formData = new FormData();
    formData.append('images', spaceData.image);
    formData.append('name', spaceData.title);
    formData.append('description', spaceData.content);


    const options = {
        method: 'post',
        headers: {
            'projectId': 'bc73q6nn4srr',
            'Authorization': `Bearer ${user?.token}`
        },
        body: formData
    }

    const res = await fetch('https://academics.newtonschool.co/api/v1/quora/channel/', options);

    if (res.ok) {
        const data = await res.json();
        console.log('data', data);
        return await data;
    }
    else {
        const errorData = await res.json();

        console.log("error", errorData);
        throw new Error(errorData.message);
    }
})

const spaceSlice = createSlice({

    name:'space',
    initialState,
    reducers:{

    },
    extraReducers : builder =>{
        builder
        .addCase(createSpace.pending, state=>{
            state.loading = true;
        })
        .addCase(createSpace.fulfilled, (state,action)=>{
            state.loading = false;
            state.space = action.payload.space;
        })
        .addCase(createSpace.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})


export default spaceSlice.reducer;