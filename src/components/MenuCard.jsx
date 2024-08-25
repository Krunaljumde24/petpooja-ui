import React from "react";
import vegIcon from "../assets/veg.png";

function MenuCard({ category, details }) {
  return (
    <div
      className="card my-3"
      style={{ width: "16rem", alignItems: "center", padding: "10px" }}
    >
      <img
        src={vegIcon}
        className="veg-icon"
        alt="veg_icon"
        style={{ marginRight: "auto" }}
      />
      <img src={details.imageURL} alt="menu_image" style={{ width: "6rem" }} />
      <div className="card-body text-center">
        <h5 className="card-title">{details.item}</h5>
        <p className="card-text">{details.description}</p>
        <p>Price : {details.price}</p>
        <button type="button" className="btn btn-sm btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
