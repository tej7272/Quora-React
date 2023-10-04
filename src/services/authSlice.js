import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const signUpUser = createAsyncThunk('signupuser', async (userData) => {
  try{
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'projectId': 'bc73q6nn4srr'
        },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      return await data;
    } 
    else {
      throw new Error('Failed to Signup');
    }

  }catch(error){
    throw new Error('User already exists');
    
  }
})


export const loginUser = createAsyncThunk('user/loginuser', 
async (Credentials) => {
  try{
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'projectId': 'bc73q6nn4srr',
        },
        body: JSON.stringify(Credentials)
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      return await data;
    } 
    else {
      throw new Error('Failed to login');
    }
  } catch (error) {
    throw new Error('Incorrect EmailId or Password');
  }
})

export const ForgotPassword = createAsyncThunk('forgetpassword', 
async (userCredentials) => {
  try{
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'projectId': 'bc73q6nn4srr',
        },
        body: JSON.stringify(userCredentials)
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      return await data;
    } 
    else {
      throw new Error('Failed to ForgotPassword');
    }
  } catch (error) {
    throw new Error('An error occurred during forgetting password');
  }
})


const authSlice = createSlice({
    name: "user",
    initialState :{
      user:null,
      token:null,
      loading:false,
      error:null

    },
    reducers: {

    },

  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.pending,(state)=>{
      state.loading=true;
      state.user = null;
      state.error=null
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.loading=false;
      state.user = action.payload.user;
      state.error = null
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.loading=false;
      state.user = null;
      state.error = action.error.message;
    })
    .addCase(signUpUser.pending,(state)=>{
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    .addCase(signUpUser.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    })
    .addCase(signUpUser.rejected,(state,action)=>{
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    })
    .addCase(ForgotPassword.pending,(state)=>{
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    .addCase(ForgotPassword.fulfilled,(state,action)=>{
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    })
    .addCase(ForgotPassword.rejected,(state,action)=>{
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    })

  }

})

export default authSlice.reducer;