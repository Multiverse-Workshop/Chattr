//import createSlice from toolkit

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//set up initialState

const initialState = {
  user: {
    loggedin: false,
    username: "",
    img: "",
  },
  status: "idle",
};

const RegisterUrl = "http://localhost:8080/api/users/register";
const loginUrl = "http://localhost:8080/api/users/login";
//async thunk for register
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data, thunkAPI) => {
    try {
      const resp = await fetch(RegisterUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await resp.json();
      return {
          loggedin: true,
          username: data.username,
          img: "https://placeimg.com/192/192/people",
      };
    } catch (error) {
      //we could pass in error.message and this would appear in the action.payload if something went wrong
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, thunkAPI) => {
    try {
      const resp = await fetch(loginUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await resp.json();
      return {
          loggedin: true,
          username: data.username,
          img: "https://placeimg.com/192/192/people",
      };
    } catch (error) {
      //we could pass in error.message and this would appear in the action.payload if something went wrong
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//create slice

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      //revert to original
      state = {
        ...state,
        loggedin: false,
        username: "",
        password: "",
        img: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "error";
        state.user = { loggedin: false, username: "", img: "", socketId: "" };
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "error";
        state.user = { loggedin: false, username: "", img: "", socketId: "" };
      });
  },
});

//export actions
export const {  } = userSlice.actions;
//export reducers
export default userSlice.reducer;
