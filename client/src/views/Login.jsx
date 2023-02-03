import React, { useState } from "react";
import { login, loginUser, registerUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const anonLogin = () => {
    try {
      dispatch(
        login({
          loggedin: true,
          username: "ANON",
          img: "https://placeimg.com/192/192/people",
        })
      );
      navigate("/chat");
    } catch (e) {
      console.log(e);
    }
  };

  const register = () => {
      try{
          dispatch(
            registerUser({
                username: username,
                firstname: "Test",
                lastname: "Testing",
                email: "test@testmail.com",
                password: password,
            })
          );
          navigate("/chat");
        }catch(e){
          console.log(e)
        }
  };

  const login = () => {
    try{
      dispatch(loginUser({
        username: username,
        password: password,
      }))
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className="login-card">
      <div className="card w-96 glass">
        <div className="card-body">
          <h2 className="card-title">Login to Chattr</h2>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions justify-end">
            <button className="btn btn-active  btn-primary" onClick={login}>Login</button>
            <button className="btn btn-active btn-secondary" onClick={register}>
              Sign Up
            </button>
            <button className="btn btn-active " onClick={anonLogin}>
              Anonymous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
