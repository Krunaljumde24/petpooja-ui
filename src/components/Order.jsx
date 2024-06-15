import React from "react";
import burger from "../assets/hamburger.png";
import sandwich from "../assets/sandwich.png";
import pizza from "../assets/pizza.png";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="container">
      <h6>Catogory</h6>

      <div className="row justify-content-between">
        <div className="col-3 mx-1 my-1 category-card text-center">
          <Link to="/menu" state={{ category: "burger" }}>
            <div>
              <img src={burger} className="card-icon" alt="" />
            </div>
            <b>Burger</b>
          </Link>
        </div>

        <div className="col-3 mx-1 my-1 category-card text-center">
          <Link to="/menu" state={{ category: "sandwich" }}>
            <div>
              <img src={sandwich} className="card-icon" alt="" />
            </div>
            <b>Sandwich</b>
          </Link>
        </div>

        <div className="col-3 mx-1 my-1 category-card text-center">
          <Link to="/menu" state={{ category: "pizza" }}>
            <div>
              <img src={pizza} className="card-icon" alt="" />
            </div>
            <b>Pizza</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
