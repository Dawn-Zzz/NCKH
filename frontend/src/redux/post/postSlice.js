import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    getPost: (state) => {
      state.isLoading = true;
    },
    getPostError: (state) => {
      state.posts = [];

      state.isLoading = false;
      state.isError = true;
    },
    getPostSuccess: (state, action) => {
      state.posts = action.payload;

      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const { getPost, getPostError, getPostSuccess } = postSlice.actions;

export default postSlice.reducer;
