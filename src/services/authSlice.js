import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  user: "",
  token: "",
  loading: false,
  error: ""

}

const projectID = 'bc73q6nn4srr';

export const signUpUser = createAsyncThunk('signupuser', async (userData) => {
  const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'projectId': projectID
    },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    const data = await response.json();


    const userSignupData = {
      token: data?.token,
      name: data?.data?.user?.name,
      email: data?.data?.user?.email
    }
    sessionStorage.setItem('user', JSON.stringify(userSignupData));

    return await data;
  }
  else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
})


export const loginUser = createAsyncThunk('loginuser', async (Credentials) => {
  const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'projectId': projectID,
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('user'))?.token}`,
    },
    body: JSON.stringify(Credentials)
  });

  if (response.ok) {
    const data = await response.json();

    const userLoginData = {
      token: data?.token,
      name: data?.data?.name,
      email: data?.data?.email
    }
    sessionStorage.setItem('user', JSON.stringify(userLoginData));

    return await data;
  }
  else {
    const errorData = await response.json();
        throw new Error(errorData.message);
  }

})

export const ForgotPassword = createAsyncThunk('forgetpassword',
  async (userCredentials) => {
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'projectId': projectID
      },
      body: JSON.stringify(userCredentials)
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


const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = "";
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = "";
        state.error = action.payload;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.user = "";
        state.error = "";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = "";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(ForgotPassword.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(ForgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(ForgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      })

  }

})

export default authSlice.reducer;