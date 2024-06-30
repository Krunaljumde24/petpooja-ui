import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Dashboard() {
  const [categoryList, setCategoryList] = useState([]);

  let getCategoryDetails = () => {
    axios
      .get("http://localhost:8080/category/get-category")
      .then((resp) => {
        console.log(resp.data);
        setCategoryList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const [category, setCategory] = useState("");

  const [menuDetails, setMenuDetails] = useState({
    category: "",
    item: "",
    description: "",
    price: "",
  });

  let handleAddCategory = (event) => {
    event.preventDefault();
    let url = "http://localhost:8080/category/add-category?name=" + category;
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        toast.success("Category Added.");
        getCategoryDetails();
        setCategory("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };

  let handleAddMenu = (event) => {
    event.preventDefault();
    console.log(menuDetails);
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
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                id="category"
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
                value={menuDetails.category}
                onChange={(event) => {
                  setMenuDetails({
                    ...menuDetails,
                    category: event.target.value,
                  });
                }}
              >
                <option disabled selected>
                  Select
                </option>
                {categoryList.map((cat) => {
                  return <option value={cat}>{cat}</option>;
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
