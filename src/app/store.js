import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import authSlice from "../services/authSlice";
import postSlice from "../services/postSlice";

export default configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        app:authSlice,
        post:postSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),

});