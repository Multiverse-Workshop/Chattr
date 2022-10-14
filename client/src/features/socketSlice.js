//import createSlice from toolkit

import { createSlice } from "@reduxjs/toolkit";

//set up initialState

const initialState = {
    socket: ''
};

//create slice

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connect: (state, action) => {
        state.socket = {...action.payload}
    },
  },
});

//export actions
export const { connect } = socketSlice.actions;
//export reducers
export default socketSlice.reducer;