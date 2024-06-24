import React, { useState } from "react";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    console.log(loginDetails);
  };

  return (
    <div className="container">
      <div className="login-form">
        <form>
          <div className="mb-3">
            <label htmlFor="uname" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="uname"
              value={loginDetails.username}
              onChange={(event) => {
                setLoginDetails({
                  ...loginDetails,
                  username: event.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="upass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="upass"
              value={loginDetails.password}
              onChange={(event) => {
                setLoginDetails({
                  ...loginDetails,
                  password: event.target.value,
                });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => handleLogin(event)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
