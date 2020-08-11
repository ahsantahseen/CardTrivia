import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import "./Header.css";

const Header = (props) => {
  const categoryReference = useRef();
  const noOfQuestionsReference = useRef();

  const [categories, setcategories] = useState([]);
  useEffect(() => {
    Axios.get("https://opentdb.com/api_category.php").then((Response) => {
      setcategories(Response.data.trivia_categories);
    });
  }, []);
  const handlerSubmit = (e, amount, category) => {
    e.preventDefault();
    Axios.get("https://opentdb.com/api.php", {
      params: {
        amount: noOfQuestionsReference.current.value,
        category: categoryReference.current.value,
      },
    }).then((response) => {
      props.setanswer(
        response.data.results.map((QuestionItem, index) => {
          const Correct_Answer = props.StringDecoder(
            QuestionItem.correct_answer
          );
          const Options = [
            ...QuestionItem.incorrect_answers.map((elem) =>
              props.StringDecoder(elem)
            ),
            Correct_Answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: props.StringDecoder(QuestionItem.question),
            answer: Correct_Answer,
            options: Options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  };

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
            <div className="form-group">
              <button type="submit" className="button">
                Generate Quiz!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
