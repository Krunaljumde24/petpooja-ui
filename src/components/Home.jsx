import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { logout } = useContext(AuthContext);
  let user = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className="container home">
      <h4>
        img
        Fuel Station</h4>
      <p>Order your food on table.</p>
      <button type="button" className="btn btn-sm btn-warning ">
        <Link to="/order" replace={true}>
          Order
        </Link>
      </button>
      <button type="button" className="btn btn-sm btn-success mx-3">
        <Link to="/get-bill" replace={true}>
          Get Bill
        </Link>
      </button>
      <button
        type="button"
        className="btn btn-sm btn-danger"
        style={{ marginRight: "100px" }}
      >
        {user && user.isLoggedIn ? (
          <Link to="/" replace={true}>
            Logout
            {logout()}
          </Link>
        ) : (
          <Link to="/login" replace={true}>
            Login
          </Link>
        )}
      </button>
      <hr />
    </div>
  );
}

export default Home;
