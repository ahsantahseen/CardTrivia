import React, { useState, useEffect, useRef } from "react";
import "./FlashCard.css";

const FlashCard = (props) => {
  const [showAnswer, setshowAnswer] = useState(false);

  const ShowAnswerFunc = () => {
    setshowAnswer(!showAnswer);
  };

  const FrontElement = useRef();
  const BackElement = useRef();

  
  return (
    <div
      className={`card ${showAnswer ? "flip" : ""}`}
      onClick={ShowAnswerFunc}
    >
      <div className="front" ref={FrontElement}>
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
      <div className="back" ref={BackElement}>
        {props.flashcard.answer}
      </div>
    </div>
  );
};

export default FlashCard;
