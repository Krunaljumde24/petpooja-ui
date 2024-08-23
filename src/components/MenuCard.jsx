import React from "react";
import alooTikkiBurger from "../assets/menu/Aloo Tikki Burger.png";
import vegIcon from "../assets/veg.png";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function MenuCard({ category }) {
  useEffect(() => {
    let url =
      "http://localhost:8090/menu/get-item-by-name?category=" + category;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get the menu details");
      });
  }, []);

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
      <img src={alooTikkiBurger} alt="menu_image" style={{ width: "6rem" }} />
      <div className="card-body text-center">
        <h5 className="card-title">Aloo Tikki Burger</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quos
          ullam amet ex velit et non minus iusto saepe!
        </p>
        <button type="button" className="btn btn-sm btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
