import React from "react";
import { useLocation } from "react-router-dom";
import vegIcon from "../assets/veg.png";

function Menu() {
  let { state } = useLocation();

  let category = state.category;
  return (
    <div className="container">
      <h5>Menu : {category}</h5>
      <div className="menu">
        <div className="menu-item">
          <p>
            <img src={vegIcon} className="veg-icon" alt="veg_icon" />
            <b>Cheese Burger</b>
          </p>

          <button className="btn btn-sm add-btn">Add + </button>
        </div>

        <div className="menu-item">
          <p>
            <img src={vegIcon} className="veg-icon" alt="veg_icon" />
            <b>Cheese Burger</b>
          </p>

          <button className="btn btn-sm add-btn">Add + </button>
        </div>

        <div className="menu-item">
          <p>
            <img src={vegIcon} className="veg-icon" alt="veg_icon" />
            <b>Cheese Burger</b>
          </p>

          <button className="btn btn-sm add-btn">Add + </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
