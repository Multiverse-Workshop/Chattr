import React from "react";

function Login() {
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
            <button className="btn btn-active ">Anonymous</button>
      </div>                        
    </div>
  </div>
  </div>
  );
}

export default Login;



