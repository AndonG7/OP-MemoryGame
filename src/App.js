import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import PrintCards from "./components/PrintCards";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <h1>Македонска Меморија</h1>
      <ScoreBoard score={score} bestScore={bestScore} />
      <PrintCards />
    </div>
  );
}

export default App;
