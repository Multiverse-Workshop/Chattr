import React, { useState } from "react";
import { anonLogin, loginUser, registerUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const anon = () => {
    try {
      dispatch(
        anonLogin({
          loggedin: true,
          username: "ANON",
          img: "https://placekitten.com/250/250",
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
      navigate("/chat");
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
            type="password"
            placeholder="Password"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions justify-end">
            <button className="btn btn-active  btn-primary" onClick={login}>Login</button>
            <button className="btn btn-active btn-secondary" onClick={register}>
              Sign Up
            </button>
            <button className="btn btn-active " onClick={anon}>
              Anonymous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
