import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const user = JSON.parse(sessionStorage.getItem("user"))


export const createPost = createAsyncThunk('createpost', async (inputValue) => {

  const formData = new FormData();
  formData.append('images', inputValue.image);
  formData.append('title', inputValue.title);
  formData.append('content', inputValue.content);



  const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post/', {
    method: 'POST',
    headers: {
      'projectId': 'bc73q6nn4srr',
      Authorization: `Bearer ${user?.token}`
    },
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    return await data;
  }
  else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
})

// export const deletePost = createAsyncThunk('deletepost', async (postId) => {

//   const res = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${postId}`, {
//     method: 'DELETE',
//     headers: {
//       'projectId': 'bc73q6nn4srr',
//       Authorization: `Bearer ${user?.token}`
//     }
//   })

//   if (res.ok) {
//     const data = await res.json();
//     return await data;
//   }
//   else {
//     const errorData = await res.json();
//     throw new Error(errorData.message);
//   }
// })


const postSlice = createSlice({
  name: "user",
  initialState: {
    post: [],
    loading: false,
    error: null

  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.post = null;
        state.error = null
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.post = null;
        state.error = action.error.message;
      })
      // .addCase(deletePost.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(deletePost.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.post = action.payload.post;
      // })
      // .addCase(deletePost.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })


  }

})

export default postSlice.reducer;