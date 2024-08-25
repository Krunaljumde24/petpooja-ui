import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import veg from "../assets/veg.png";
import nonVeg from "../assets/nonVeg.png";

function Dashboard() {
  const [categoryNameList, setCategoryNameList] = useState([]);

  let getCategoryDetails = () => {
    let url = process.env.REACT_APP_SERVER_API_URL + "category/get-category";
    axios
      .get(url)
      .then((resp) => {
        // success
        if (resp.status && resp.status === 200) {
          let data = resp.data;
          let catSet = new Set();
          data.map((obj) => {
            catSet.add(obj.name);
          });
          setCategoryNameList([...catSet]);
        } else if (resp.response.status && resp.response.status === 400) {
          toast.success("Category Added.");
        }
        // bad request

        // error
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const [catDetails, setCatDetails] = useState({
    catName: "",
    catImage: "",
  });

  const [menuDetails, setMenuDetails] = useState({
    category: "",
    item: "",
    description: "",
    price: "",
    type: "",
    image: "",
  });

  let handleAddCategory = (event) => {
    event.preventDefault();
    let url = process.env.REACT_APP_SERVER_API_URL + "category/add-category";
    axios
      .post(url, catDetails)
      .then((resp) => {
        toast.success("Category Added.");
        setCatDetails({
          catName: "",
          catImage: "",
        });
        document.getElementById("catIcon").value = "";
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
      });
  };

  let validateMenuDetails = () => {
    const { category, description, image, item, price, type } = menuDetails;
    if (
      typeof category === "string" &&
      category.length > 0 &&
      category != "Select" &&
      typeof description === "string" &&
      description.length > 0 &&
      typeof image === "string" &&
      image.length > 0 &&
      typeof item === "string" &&
      item.length > 0 &&
      typeof type === "string" &&
      type.length > 0 &&
      typeof price === "string" &&
      price > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  let handleAddMenu = (event) => {
    event.preventDefault();
    if (validateMenuDetails()) {
      let url = process.env.REACT_APP_SERVER_API_URL + "menu/add-menu-item";
      axios
        .post(url, menuDetails)
        .then((resp) => {
          toast.success("Menu Added.");
          setMenuDetails({
            category: "",
            item: "",
            description: "",
            price: "",
            type: "",
            image: "",
          });
          document.getElementById("menuIcon").value = "";
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to add menu!");
        });
    } else {
      toast("Please select all fields", {
        duration: 4000,
        position: "top-center",
        style: {},
        className: "",
        icon: "⚠️",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  };

  let convertImgToBase64 = (file, type) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (type === "cat") {
        setCatDetails({
          ...catDetails,
          catImage: reader.result,
        });
      } else if (type === "menu") {
        setMenuDetails({
          ...menuDetails,
          image: reader.result,
        });
      }
    };
  };

  return (
    <div className="container dashboard">
      <div className="row">
        <div className="col">
          <h5>Add Category</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Enter Category Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={catDetails.catName}
                onChange={(event) =>
                  setCatDetails({ ...catDetails, catName: event.target.value })
                }
                id="category"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Upload an image
              </label>
              <input
                required
                type="file"
                name="catIcon"
                id="catIcon"
                className="form-control form-control-sm"
                onChange={(event) =>
                  convertImgToBase64(event.target.files[0], "cat")
                }
              />
            </div>
            <button
              className="btn btn-sm btn-primary"
              onClick={(event) => handleAddCategory(event)}
            >
              Add
            </button>
          </form>
          <hr />
          <h5>Add Menu Items</h5>
          <form>
            <div className="mb-3">
              <label
                htmlFor="selectCategory"
                className="form-label form-label-sm"
              >
                Select Category
              </label>
              <select
                className="form-select form-select-sm"
                aria-label="Default select example"
                required
                value={menuDetails.category}
                onChange={(event) => {
                  setMenuDetails({
                    ...menuDetails,
                    category: event.target.value,
                  });
                }}
              >
                <option>Select</option>
                {categoryNameList.map((cat, index) => {
                  return (
                    <option value={cat} key={index}>
                      {cat}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Menu Item
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={menuDetails.item}
                onChange={(event) =>
                  setMenuDetails({ ...menuDetails, item: event.target.value })
                }
                id="category"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Enter Description
              </label>
              <textarea
                name="description"
                id="Description"
                className="form-control"
                value={menuDetails.description}
                onChange={(event) =>
                  setMenuDetails({
                    ...menuDetails,
                    description: event.target.value,
                  })
                }
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="menuIcon" className="form-label">
                Upload an image
              </label>
              <input
                required
                type="file"
                name="menuIcon"
                id="menuIcon"
                className="form-control form-control-sm"
                onChange={(event) =>
                  convertImgToBase64(event.target.files[0], "menu")
                }
              />
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="vegNonVegInput"
                id="vegInput"
                defaultValue="Veg"
                onChange={(event) => {
                  setMenuDetails({
                    ...menuDetails,
                    type: event.target.value,
                  });
                }}
              />
              <label className="form-check-label" htmlFor="vegInput">
                <img src={veg} alt="veg_icon" style={{ width: "22px" }} /> Veg
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="vegNonVegInput"
                id="nonVegInput"
                defaultValue="Non-Veg"
                onChange={(event) =>
                  setMenuDetails({
                    ...menuDetails,
                    type: event.target.value,
                  })
                }
              />
              <label className="form-check-label" htmlFor="nonVegInput">
                <img
                  src={nonVeg}
                  alt="non_veg_icon"
                  style={{ width: "22px" }}
                />{" "}
                Non-Veg
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Enter Price
              </label>
              <input
                type="number"
                className="form-control form-control-sm"
                value={menuDetails.price}
                onChange={(event) =>
                  setMenuDetails({ ...menuDetails, price: event.target.value })
                }
                id="price"
              />
            </div>

            <button
              className="btn btn-sm btn-warning"
              onClick={(event) => handleAddMenu(event)}
            >
              Add Menu
            </button>
          </form>
        </div>
        <div className="col">
          <h5>Preview</h5>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
