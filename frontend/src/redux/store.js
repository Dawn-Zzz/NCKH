import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import postSlice from "./post/postSlice";
import postDetailsSlice from "./postDetails/postDetailsSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    postDetails: postDetailsSlice,
  },
});