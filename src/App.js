import React, { useState } from "react";
import FlashCardLists from "./Components/FlashCardLists/FlashCardLists";

function App() {
  const Data = [
    {
      id: 1,
      question: "What is Pakistan's Capital City?",
      answer: "Islamabad",
      options: ["Karachi", "Islamabad", "Quetta", "Peshawar"],
    },
    {
      id: 2,
      question: "What is 4+4",
      answer: "8",
      options: ["7", "9", "8", "6"],
    },
  ];
  const [answer, setanswer] = useState(Data);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FLASH CARD QUIZ APP</h1>

      <FlashCardLists flashcardsData={answer}></FlashCardLists>
    </div>
  );
}

export default App;
