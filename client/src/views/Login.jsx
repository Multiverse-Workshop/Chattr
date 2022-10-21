import React from "react";
import { login } from '../features/userSlice';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);

  const anonLogin = () => {
    try{
      dispatch(login({
        loggedin: true,
        username: 'ANON',
        password: 'PASSWORD',
        img: 'https://placeimg.com/192/192/people',
        socketId: socket.socketId
      }));
      navigate('/chat')
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
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
      <div className="card-actions justify-end">
      <button className="btn btn-active  btn-primary">Login</button>
            <button className="btn btn-active btn-secondary">Sign Up</button>
            <button className="btn btn-active " onClick={anonLogin}>Anonymous</button>
      </div>                        
    </div>
  </div>
  </div>
  );
}

export default Login;



