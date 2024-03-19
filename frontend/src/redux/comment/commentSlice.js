import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: null,
    reply: null,
    isLoading: false,
  },
  reducers: {
    Create_Comment: (state) => {
      state.isLoading = true;
    },
    Create_Comment_Error: (state) => {
      state.comment = null;

      state.isLoading = false;
      state.isError = true;
    },
    Create_Comment_Success: (state, action) => {
      state.comment = action.payload;

      state.isLoading = false;
      state.isError = false;
    },
    Create_Reply: (state) => {
      state.isLoading = true;
    },
    Create_Reply_Error: (state) => {
      state.reply = null;

      state.isLoading = false;
      state.isError = true;
    },
    Create_Reply_Success: (state, action) => {
      state.reply = action.payload;

      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const {
  Create_Comment,
  Create_Comment_Error,
  Create_Comment_Success,
  Create_Reply,
  Create_Reply_Error,
  Create_Reply_Success,
} = commentSlice.actions;

export default commentSlice.reducer;
