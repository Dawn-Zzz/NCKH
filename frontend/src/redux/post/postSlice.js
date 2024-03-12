import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    count: "",
    currentPage: "",
    totalPages: "",
    rows: [],

    isLoading: false,
    isError: false,
  },
  reducers: {
    getPost: (state) => {
      state.isLoading = true;
    },
    getPostError: (state) => {
      state.count = "";
      state.currentPage = "";
      state.totalPages = "";
      state.rows = [];

      state.isLoading = false;
      state.isError = true;
    },
    getPostSuccess: (state, action) => {
      state.count = action.payload.count;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.rows = action.payload.rows;

      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const { getPost, getPostError, getPostSuccess } = postSlice.actions;

export default postSlice.reducer;
