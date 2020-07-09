import React, { useState, useContext } from "react";
import Persona from "./Persona";
import Scorebar from "./Scorebar";
import "./Contestant.css";
import { DispatchContext } from "./RealApp";

interface ContestantProps {
  name: string;
  maxScore: number;
}

function Contestant(props: ContestantProps) {
  const [score, setScore] = useState(0);
  const context = useContext(DispatchContext);

  function incrementScore() {
    const newScore = score + 1;
    setScore(newScore);
    if (context)
      context.dispatch({ type: "scoreChange", payload: { score: newScore } });
  }

  const width = (score / props.maxScore) * 90 + "%";
  return (
    <div className="Contestant" onClick={incrementScore}>
      <Persona {...props} />
      <div style={{ width: "100%" }}>
        <Scorebar {...props} score={score} width={width} />
      </div>
    </div>
  );
}

export default Contestant;
