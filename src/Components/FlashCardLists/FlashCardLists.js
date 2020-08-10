import React from "react";
import FlashCard from "../FlashCard/FlashCard";

const FlashCardLists = (props) => {
  return (
    <div>
      {props.flashcardsData.map((flashcard) => {
        return <FlashCard key={flashcard.id} flashcard={flashcard}></FlashCard>;
      })}
    </div>
  );
};

export default FlashCardLists;
