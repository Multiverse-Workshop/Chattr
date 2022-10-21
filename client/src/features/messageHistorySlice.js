//import createSlice from toolkit

import { createSlice } from "@reduxjs/toolkit";

//set up initialState

const initialState = {
  message: [
    {
      id: "TEWIPHPPHrNh-YTIAAFb",
      user: "ANON",
      message: "hello",
      date: "2022-10-14",
      sent: true,
      delivered: true,
      deliveredAt: "9:51",
    },
    {
      id: "TEWIPHPPHrNh-YTIAAFb",
      user: "ANON",
      message: "test test",
      date: "2022-10-14",
      sent: true,
      delivered: true,
      deliveredAt: "10:21",
    },
  ],
};

//create slice

const messageHistorySlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    saveMessage: (state, action) => {
      state.message.push(action.payload);
    },
    getSavedMessages: (state, action) => {
      return state;
    },
  },
});

//export actions
export const { saveMessage, getSavedMessages } = messageHistorySlice.actions;
//export reducers
export default messageHistorySlice.reducer;
