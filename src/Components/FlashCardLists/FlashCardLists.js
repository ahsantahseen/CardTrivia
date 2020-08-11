import React from "react";
import FlashCard from "../FlashCard/FlashCard";
import "./FlashCardLists.css";

const FlashCardLists = (props) => {
  return (
    <div className="Grid-Layout">
      {props.flashcardsData.map((flashcard) => {
        return (
          <FlashCard
            key={flashcard.id}
            
            flashcard={flashcard}
          ></FlashCard>
        );
      })}
    </div>
  );
};

export default FlashCardLists;
