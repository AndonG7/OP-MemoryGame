function ScoreBoard(props) {
    return (
      <div className="ScoreBoard">
        <span>Поени: {props.score}</span><br></br>
        <span>Најмногу поени: {props.bestScore}</span><br></br><br></br>
      </div>
    );
  }
  
  export default ScoreBoard;
  