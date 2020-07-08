import React, { useState } from "react";
import Persona from "./Persona";
import Scorebar from "./Scorebar";
import "./Contestant.css";

interface ContestantProps {
  name: string;
  dispatch: any;
  maxScore: number;
}

function Contestant(props: ContestantProps) {
  const [score, setScore] = useState(0);

  function incrementScore() {
    const newScore = score + 1;
    setScore(newScore);
    props.dispatch({ type: "scoreChange", payload: { score: newScore } });
  }

  const width = (score / props.maxScore) * 100 + "%";
  return (
    <div className="Contestant" onClick={incrementScore}>
      <Persona {...props} />
      <div style={{ width: "500px" }}>
        <Scorebar {...props} score={score} width={width} />
      </div>
    </div>
  );
}

export default Contestant;
