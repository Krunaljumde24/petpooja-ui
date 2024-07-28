import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    let { username, password } = loginDetails;
    if (username && password && username != "" && password != "") {
      login(username, password)
        ? navigate("/dashboard")
        : toast.error("Failed to login");
    } else {
      toast.error("Please enter username and password!");
    }
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userDetails"));
    if (user && user.isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="container">
      <div className="login-form">
        <h4>Login Form</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="uname" className="form-label">
              Username
            </label>
            <input
              required
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
              required
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
            type="submit"
            className="btn btn-primary"
            onClick={(event) => handleLogin(event)}
          >
            Login
          </button>
        </form>
        <p>
          New to Petpooja, click here to
          <button className="btn btn-sm btn-warning">
            <Link to="/signup"> Register </Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
