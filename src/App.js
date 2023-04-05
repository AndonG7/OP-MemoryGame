import { useState, useEffect } from "react";
import ScoreBoard from "./components/ScoreBoard";
import PrintCards from "./components/PrintCards";
import grujo from "./images/grujo.jpg";
import zaev from "./images/zajko.jpg";
import obidzuko from "./images/obidzuko.jpg";
import vasko from "./images/vasko.jpg";
import caci from "./images/caci.jpg";
import apasiev from "./images/apasiev.jpg";
import shuffleArray from "./shuffleArray.js";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([
    {title: "Грујо", src:grujo, alt:"Nikola Gruevski", id:0},
    {title: "Заев", src:zaev, alt:"Zoran Zaev", id:1},
    {title: "Обиџуко", src:obidzuko, alt:"Nikola Gruevski", id:2},
    {title: "Васко", src:vasko, alt:"Nikola Gruevski", id:3},
    {title: "Цаци", src:caci, alt:"Nikola Gruevski", id:4},
    {title: "Апасиев", src:apasiev, alt:"Nikola Gruevski", id:5},
  ]);

useEffect(() => {
  setShuffledCards(shuffleArray(shuffledCards));
}, [clickedCards]);

function handleClick(id) {
  // Check if the card has already been clicked
  if (clickedCards.includes(id)) {
    // Reset the score and clickedCards state
    setScore(0);
    setClickedCards([]);
    alert("Избравте карта што веќе ја имавте избрано!");
  } else {
    // Increment the score and add the card to clickedCards state
    setScore(score + 1);
    setClickedCards([...clickedCards, id]);
    // Update the best score if necessary
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
  }
}

  return (
    <div className="App">
      <h1>Македонска Меморија</h1>
      <ScoreBoard score={score} bestScore={bestScore} />
      <PrintCards handleClick={handleClick} cards={shuffledCards} />
    </div>
  );
}

export default App;
