import axios from "axios";
import React, { useState } from "react";

function Test() {
  const [categoryDetails, setCategoryDetails] = useState({
    catName: "",
    catImage: null,
  });

  let handleAddCategory = (event) => {
    event.preventDefault();
    console.log(categoryDetails);

    let url = "http://localhost:8080/test/add-category";

    let formdata = new FormData();
    formdata.append("name", categoryDetails.catName);
    formdata.append("image", categoryDetails.catImage);

    axios
      .post(url, formdata, {
        "Content-Type": "multipart/form-data",
      })
      .then((resp) => {
        console.log(resp);
        setCategoryDetails({
          catName: "",
          catImage: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container dashboard">
      <div className="row">
        <div className="col">
          <h5>Add Category</h5>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Enter Category Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="category"
              value={categoryDetails.catName}
              onChange={(event) => {
                setCategoryDetails({
                  ...categoryDetails,
                  catName: event.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Upload an image
            </label>
            <input
              type="file"
              name="catIcon"
              id="catIcon"
              className="form-control form-control-sm"
              value={null}
              onChange={(event) => {
                setCategoryDetails({
                  ...categoryDetails,
                  catImage: event.target.files[0],
                });
              }}
            />
          </div>
          <button
            className="btn btn-sm btn-primary"
            onClick={(event) => handleAddCategory(event)}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Test;
