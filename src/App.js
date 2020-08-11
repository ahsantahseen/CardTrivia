import React, { useState, useEffect } from "react";
import FlashCardLists from "./Components/FlashCardLists/FlashCardLists";
import "./App.css";
import Header from "./Components/Header/Header";
import FooterBar from "./Components/FooterBar/FooterBar";

function App() {
  const [answer, setanswer] = useState([]);

  const StringDecoder = (str) => {
    const TextArea = document.createElement("textarea");
    TextArea.innerHTML = str;
    return TextArea.value;
  };
  return (
    <>
      <Header setanswer={setanswer} StringDecoder={StringDecoder}></Header>
      <h1>Flash Cards Quiz!</h1>
      <div className="container">
        <FlashCardLists flashcardsData={answer}></FlashCardLists>
      </div>
      <FooterBar></FooterBar>
    </>
  );
}

export default App;
