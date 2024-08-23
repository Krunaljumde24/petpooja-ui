import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";

function Menu() {
  let { state } = useLocation();

  return (
    <div className="container">
      {state ? (
        <>
          <h5>Menu : {state.category}</h5>
          <div className="menu">
            <MenuCard category={state.category} />
          </div>
        </>
      ) : (
        <>
          <h5>
            Please select a{" "}
            <Link to="/order" replace={true}>
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "yellow" }}
              >
                Category
              </button>
            </Link>
          </h5>
        </>
      )}
    </div>
  );
}

export default Menu;
