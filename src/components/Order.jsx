import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";

function Order() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/category/get-category")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h6>Catogory</h6>
      <div className="row justify-content-between">
        {categories.map((obj, index) => {
          return (
            <CategoryCard category={obj.name} icon={obj.imageURL} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Order;
