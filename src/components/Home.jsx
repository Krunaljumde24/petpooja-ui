import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home">
      <h4>Fuel Station</h4>
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
      <button type="button" className="btn btn-sm btn-danger">
        <Link to="/admin-login" replace={true}>
          Admin Login
        </Link>
      </button>
      <hr />
    </div>
  );
}

export default Home;
