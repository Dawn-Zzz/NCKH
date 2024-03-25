// import { createSlice } from "@reduxjs/toolkit";

// export const commentSlice = createSlice({
//   name: "comment",
//   initialState: {
//     comment: null,
//     isLoading: false,
//   },
//   reducers: {
//     Create_Comment: (state) => {
//       state.isLoading = true;
//       state.comment = null;
//     },
//     Create_Comment_Error: (state) => {
//       state.comment = null;

//       state.isLoading = false;
//       state.isError = true;
//     },
//     Create_Comment_Success: (state, action) => {
//       state.comment = action.payload;

//       state.isLoading = false;
//       state.isError = false;
//     },
//   },
// });

// export const { Create_Comment, Create_Comment_Error, Create_Comment_Success } =
//   commentSlice.actions;

// export default commentSlice.reducer;
