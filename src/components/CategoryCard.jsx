import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, icon }) {
  return (
    <div className="col-3 mx-1 my-1 category-card text-center">
      <Link to="/menu" state={{ category: category }}>
        <div>
          <img src={icon} className="card-icon" alt="category_icon" />
        </div>
        <b>{category}</b>
      </Link>
    </div>
  );
}

export default CategoryCard;
