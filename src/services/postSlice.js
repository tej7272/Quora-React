import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"))


export const createPost = createAsyncThunk('createpost', async (inputValue) => {

    const formData = new FormData();
  formData.append('title', inputValue.title);
  formData.append('content', inputValue.postContent);
//   formData.append('appType', 'quora');
  formData.append('image', inputValue.postImage);

    const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post/', {
        method: 'POST',
        headers: {
            'projectId': 'bc73q6nn4srr',
            'Authorization':`Bearer ${user?.token}`
        },
        body: formData
    });

    if (response.ok) {
      const data = await response.json();
      return await data;
    } 
    else {
      throw new Error('worng');
    }
})


const postSlice = createSlice({
    name: "user",
    initialState :{
        post:null,
      loading:false,
      error:null

    },
    reducers: {

    },

  extraReducers:(builder)=>{
    builder
    .addCase(createPost.pending,(state)=>{
      state.loading=true;
      state.post = null;
      state.error=null
    })
    .addCase(createPost.fulfilled,(state,action)=>{
      state.loading=false;
      state.post = action.payload;
      state.error = null
    })
    .addCase(createPost.rejected,(state,action)=>{
      state.loading=false;
      state.post = null;
      state.error = action.error.message;
    })

  }

})

export default postSlice.reducer;