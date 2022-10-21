//import createSlice from toolkit

import { createSlice } from "@reduxjs/toolkit";

//set up initialState

const initialState = {
  user: {
    loggedin: false,
    username: "",
    password: "",
    img: "",
    socketId: "",
  },
};

//create slice

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      //replace current state with new state
      state.user = { ...action.payload };
    },
    logout: (state) => {
      //revert to original
      state = {
        ...state,
        loggedin: false,
        username: "",
        password: "",
        img: "",
        socketId: "",
      };
    },
  },
});

//export actions
export const { login, logout, addSocketId } = userSlice.actions;
//export reducers
export default userSlice.reducer;
