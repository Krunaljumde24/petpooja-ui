import React, { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
  const [userDetail, setUserDetails] = useState({
    name: "",
    username: "",
    password: "",
    mobileNumber: "",
    emailId: "",
  });

  return (
    <div className="container">
      <div className="login-form">
        <h4>SignUp Form</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              value={userDetail.name}
              onChange={(event) => {
                setUserDetails({
                  ...userDetail,
                  name: event.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userDetail.username}
              onChange={(event) => {
                setUserDetails({
                  ...userDetail,
                  username: event.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              value={userDetail.password}
              onChange={(event) => {
                setUserDetails({
                  ...userDetail,
                  password: event.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              value={userDetail.emailId}
              onChange={(event) => {
                setUserDetails({
                  ...userDetail,
                  emailId: event.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNum" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="mobileNum"
              value={userDetail.mobileNumber}
              onChange={(event) => {
                setUserDetails({
                  ...userDetail,
                  mobileNumber: event.target.value,
                });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(event) => handleLogin(event)}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already having account, click here to
          <button className="btn btn-sm btn-warning">
            <Link to="/login">Login</Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
