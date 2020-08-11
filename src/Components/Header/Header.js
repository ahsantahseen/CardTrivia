import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";

const Header = () => {
  const categoryReference = useRef();
  const noOfQuestionsReference = useRef();

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
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <div className="form-group">
            <label htmlFor="amount">No of Questions</label>
            <input
              type="number"
              id="ammount"
              min="1"
              step="1"
              defaultValue={10}
              ref={noOfQuestionsReference}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
