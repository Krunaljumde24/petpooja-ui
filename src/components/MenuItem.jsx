import React from "react";

function MenuItem() {
  return (
    <div className="menu-item">
      <div className="menu-image">
        <img src="" alt="" />
      </div>

      <div className="menu-content">
        <p>
          <img src={vegIcon} className="veg-icon" alt="veg_icon" />
          <b>Cheese Burger</b>
        </p>
        <button className="btn btn-sm add-btn">Add + </button>
      </div>
    </div>
  );
}

export default MenuItem;
