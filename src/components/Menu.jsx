import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuCard from "./MenuCard";
import axios from "axios";

function Menu() {
  let { state } = useLocation();

  const [menuDetails, setMenuDetails] = useState([]);
  const [filteredMenuDetail, setFilteredMenuDetail] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (state && state.category) {
      let category = state.category;
      let url =
        process.env.REACT_APP_SERVER_API_URL +
        "menu/get-item-by-category?category=" +
        category;
      axios
        .get(url)
        .then((resp) => {
          setMenuDetails(resp.data);
          setFilteredMenuDetail(resp.data);
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state]);

  useEffect(() => {
    let filteredData = menuDetails.filter((menu) =>
      menu.item.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredMenuDetail(filteredData);
  }, [searchInput]);

  return (
    <div className="container">
      {state ? (
        <>
          <h5>Menu : {state.category}</h5>
          <input
            type="text"
            style={{ width: "30%" }}
            className="form-control form-control-sm"
            placeholder="Search for menu"
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
            id="searchMenu"
          />
          <div className="menu row">
            {filteredMenuDetail.map((menu) => {
              return (
                <MenuCard
                  category={state.category}
                  details={menu}
                  className="col"
                />
              );
            })}
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
