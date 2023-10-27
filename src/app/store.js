import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/authSlice";
import postSlice from "../services/postSlice";
import spaceSlice from "../services/spaceSlice";
import commentSlice from "../services/commentSlice";
import { productApi } from "../services/productApi";
import likeSlice from "../services/likeSlice";

export default configureStore({
    reducer:{
        [productApi.reducerPath]:productApi.reducer,
        app:authSlice,
        post:postSlice,
        space:spaceSlice,
        comment:commentSlice,
        like:likeSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),

});