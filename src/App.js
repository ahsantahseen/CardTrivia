import React, { useState, useEffect } from "react";
import FlashCardLists from "./Components/FlashCardLists/FlashCardLists";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";

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
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((response) => {
      setanswer(
        response.data.results.map((QuestionItem, index) => {
          const Correct_Answer = StringDecoder(QuestionItem.correct_answer);
          const Options = [
            ...QuestionItem.incorrect_answers.map((elem) =>
              StringDecoder(elem)
            ),
            Correct_Answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: StringDecoder(QuestionItem.question),
            answer: Correct_Answer,
            options: Options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  const StringDecoder = (str) => {
    const TextArea = document.createElement("textarea");
    TextArea.innerHTML = str;
    return TextArea.value;
  };
  return (
    <>
      <h1>flash card quiz</h1>
      <Header></Header>
      <div className="container">
        <FlashCardLists flashcardsData={answer}></FlashCardLists>
      </div>
    </>
  );
}

export default App;
