import React, { useState, useEffect, useRef } from "react";
import "./FlashCard.css";

const FlashCard = (props) => {
  const [showAnswer, setshowAnswer] = useState(false);
  const [Height, setHeight] = useState("initial");
  const ShowAnswerFunc = () => {
    setshowAnswer(!showAnswer);
  };

  const FrontElement = useRef();
  const BackElement = useRef();

  const setMaxHeight = () => {
    const frontHeight = FrontElement.current.getBoundingClientRect().height;
    const backHeight = BackElement.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  };
  useEffect(setMaxHeight, [
    props.flashcard.question,
    props.flashcard.options,
    props.flashcard.answer,
  ]);
  return (
    <div
      className={`card ${showAnswer ? "flip" : ""}`}
      style={{ height: Height }}
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
