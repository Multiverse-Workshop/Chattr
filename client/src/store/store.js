//import configureStore from redux toolkit

import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../features/userSlice"
import messageHistorySlice from "../features/messageHistorySlice";
import socketSlice from "../features/socketSlice";

//make store

export const store = configureStore({
    reducer: {
        user: userSlice,
        messageHistory: messageHistorySlice,
        socket: socketSlice,
    },
});