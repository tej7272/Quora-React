import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createPost = createAsyncThunk('createpost', async (inputValue) => {

  const formData = new FormData();
  formData.append('images', inputValue.image);
  formData.append('title', inputValue.title);
  formData.append('content', inputValue.content);



  const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post/', {
    method: 'POST',
    headers: {
      'projectId': 'bc73q6nn4srr',
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("user"))?.token}`
    },
    body: formData
  });

  console.log(JSON.parse(sessionStorage.getItem("user"))?.token);

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


//   const url = `https://academics.newtonschool.co/api/v1/quora/post/${postId}`;

//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       projectId : 'bc73q6nn4srr',
//       Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("user"))?.token}`
//     }
//   }

//   try {
//     const res = await fetch(url, options);

//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     } else {
//       const errorData = await res.json();
//       console.error("Error deleting post:", errorData);
//       throw new Error(errorData.message);
//     }
//   } catch (error) {
//     console.error("Error in deletePost async thunk:", error);
//     throw error;
//   }
// })


const postSlice = createSlice({
  name: "post",
  initialState : {
    posts: [],
    loading: false,
    error: "",
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // .addCase(deletePost.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(deletePost.fulfilled, (state, action) => {
      //   state.loading = false;
      //   console.log("Server response after deleting post:", action.payload);
      //   state.posts = action.payload.posts;
      // })
      // .addCase(deletePost.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      //   console.error("Error deleting post:", action.payload);
      // })


  }

})

export default postSlice.reducer;