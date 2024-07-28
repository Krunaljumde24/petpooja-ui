import axios from "axios";
import React, { useState } from "react";

function Test() {
  const [categoryDetails, setCategoryDetails] = useState({
    catName: "",
    catImage: null,
  });

  const [imgBase64, setImgBase64] = useState("");

  let fileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgBase64(reader.result);
      console.log(reader.result);
    };
  };

  let handleAddCategory = (event) => {
    event.preventDefault();
    console.log(categoryDetails);

    let url = "http://localhost:8080/test/upload-image";

    axios
      .post(url, {
        name: categoryDetails.catName,
        image: imgBase64,
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
              accept="image/*"
              name="catIcon"
              id="catIcon"
              className="form-control form-control-sm"
              value={null}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setCategoryDetails({
                  ...categoryDetails,
                  catImage: event.target.files[0],
                });
                fileToBase64(event.target.files[0]);
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
