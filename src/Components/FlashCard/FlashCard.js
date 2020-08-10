import React, { useState } from "react";
import "./FlashCard.css";

const FlashCard = (props) => {
  const [showAnswer, setshowAnswer] = useState(false);

  const ShowAnswerFunc = () => {
    setshowAnswer(!showAnswer);
  };
  return (
    <div
      className={`card ${showAnswer ? "flip" : ""}`}
      onClick={ShowAnswerFunc}
    >
      <div className="front">
        {props.flashcard.question}
        <div className="choice-options">
          {props.flashcard.options.map((option) => {
            return (
              <div key={option} className="choice-option">
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{props.flashcard.answer}</div>
    </div>
  );
};

export default FlashCard;
