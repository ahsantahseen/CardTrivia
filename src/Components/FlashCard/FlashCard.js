import React, { useState } from "react";

const FlashCard = (props) => {
  const [showAnswer, setshowAnswer] = useState(false);

  const ShowAnswerFunc = () => {
    setshowAnswer(true);
  };
  return (
    <div onClick={ShowAnswerFunc}>
      {showAnswer ? props.flashcard.answer : props.flashcard.question}
    </div>
  );
};

export default FlashCard;
