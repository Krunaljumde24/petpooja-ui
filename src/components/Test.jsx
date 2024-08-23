import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";


function Test() {
  const [categoryDetails, setCategoryDetails] = useState({
    catName: "",
    catImage: null,
  });

  const [imgBase64, setImgBase64] = useState("");

  let handleAddCategory = (event) => {
    event.preventDefault();
    let url = "http://localhost:8080/test/upload-image";
    let data = {
      name: categoryDetails.catName,
      image: imgBase64,
    };
    axios
      .post(url, data)
      .then((resp) => {
        console.log(resp);
        toast.success("Category Added.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let convertImageToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgBase64(reader.result);
    };
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
                setCategoryDetails({
                  ...categoryDetails,
                  catImage: event.target.files[0],
                });
                convertImageToBase64(event.target.files[0]);
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
