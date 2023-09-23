import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import authSlice from "../services/authSlice";

export default configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        app:authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),

});