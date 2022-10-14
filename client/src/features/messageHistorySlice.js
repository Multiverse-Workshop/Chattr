//import createSlice from toolkit

import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

//set up initialState

const initialState = [
    
    {
        id: 'TEWIPHPPHrNh-YTIAAFb',
        user: 'ANON',
        message: 'hello',
        date: '2022-10-14',
        sent: true,
        delivered: true,
        deliveredAt: '9:51'
      },
      {
        id: 'TEWIPHPPHrNh-YTIAAFb',
        user: 'ANON',
        message: 'test test',
        date: '2022-10-14',
        sent: true,
        delivered: true,
        deliveredAt: '9:51'
      },
]

//create slice

const messageHistorySlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        saveMessage: (state, action) => {
            state.push(action.payload)
        },
        getSavedMessages: (state,action) => {
            return state;
        }
    }
})

//export actions
export const { saveMessage, getSavedMessages } = messageHistorySlice.actions;
//export reducers
export default messageHistorySlice.reducer;

//saveMessage
//getSaveMessages