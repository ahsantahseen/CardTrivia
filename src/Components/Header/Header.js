import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";

const Header = () => {
  const categoryReference = useRef();
  const handlerSubmit = (e) => {
    e.prevent();
  };
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    Axios.get("https://opentdb.com/api_category.php").then((Response) => {
      setcategories(Response.data.trivia_categories);
      console.log(Response.data);
    });
  }, []);
  return (
    <div>
      <form className="header" onSubmit={handlerSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryReference}>
            {categories.map((category) => {
              return (
                <option value={category.id} id={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;
