import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    name: "",
    email: "",
    password: "",
    pic: "",
    isAdmin: "",

    isLoading: false,
    isInit: true,
    auth: false,
  },
  reducers: {
    register: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.pic = "";
      state.isAdmin = "";

      state.isLoading = true;
      state.isInit = false;
      state.auth = false;
    },
    registerError: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.pic = "";
      state.isAdmin = "";

      state.isLoading = false;
      state.isInit = false;
      state.auth = false;
    },
    registerSuccess: (state, action) => {
      state.id = action.payload.user._id;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.password = action.payload.user.password;
      state.pic = action.payload.user.pic;
      state.isAdmin = action.payload.user.isAdmin;

      state.isLoading = false;
      state.isInit = false;
      state.auth = true;
    },
    login: (state) => {
      // state.id = "";
      // state.name = "";
      // state.email = "";
      // state.password = "";
      // state.pic = "";
      // state.isAdmin = "";

      state.isLoading = true;
      state.isInit = false;
      state.auth = false;
    },
    loginError: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.pic = "";
      state.isAdmin = "";

      state.isLoading = false;
      state.isInit = false;
      state.auth = false;
    },
    loginSuccess: (state, action) => {
      state.id = action.payload.user._id;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.password = action.payload.user.password;
      state.pic = action.payload.user.pic;
      state.isAdmin = action.payload.user.isAdmin;

      state.isLoading = false;
      state.isInit = false;
      state.auth = true;
    },
    refresh: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.pic = "";
      state.isAdmin = "";

      state.isLoading = true;
      state.isInit = false;
      state.auth = false;
    },
    refreshError: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.pic = "";
      state.isAdmin = "";

      state.isLoading = false;
      state.isInit = false;
      state.auth = false;
    },
    refreshSuccess: (state, action) => {
      state.id = action.payload.user._id;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.password = action.payload.user.password;
      state.pic = action.payload.user.pic;
      state.isAdmin = action.payload.user.isAdmin;

      state.isLoading = false;
      state.isInit = false;
      state.auth = true;
    },
    logout: (state) => {
      state.isLoading = true;
      state.isInit = false;
    },
    logoutError: (state) => {
      state.isLoading = false;
      state.isInit = false;
    },
    logoutSuccess: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.password = "";
      state.pic = "";
      state.isAdmin = "";

      state.isLoading = false;
      state.isInit = false;
      state.auth = false;
    },
  },
});

export const {
  register,
  registerError,
  registerSuccess,
  login,
  loginError,
  loginSuccess,
  refresh,
  refreshError,
  refreshSuccess,
  logout,
  logoutError,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
