import React, { useState, useContext, useRef, MutableRefObject } from "react";
import Persona from "./Persona";
import Scorebar from "./Scorebar";
import "./Contestant.css";
import { DispatchContext } from "./RealApp";

interface ContestantProps {
  name: string;
  maxScore: number;
  restorationKey?: string;
}

function Contestant(props: ContestantProps) {
  const preScore: number | null = props.restorationKey
    ? parseInt(
        window.localStorage.getItem(props.restorationKey + "ContestantKey") ||
          "0"
      ) || 0
    : 0;
  const [score, setScore] = useState(preScore);
  const [isEdit, setIsEdit] = useState(false);
  const context = useContext(DispatchContext);
  const numberRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  function incrementScore() {
    const newScore = score + 1;
    assignScore(newScore);
  }

  function assignScore(newScore: number) {
    setScore(newScore);
    if (props.restorationKey) {
      window.localStorage.setItem(
        props.restorationKey + "ContestantKey",
        "" + newScore
      );
    }
    if (context)
      context.dispatch({ type: "scoreChange", payload: { score: newScore } });
  }

  function enterEdit() {
    setIsEdit(true);
  }
  function setScoreOnSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (numberRef.current) assignScore(JSON.parse(numberRef.current.value));
    setIsEdit(false);
  }

  const style = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    width: "100%"
  };

  const width = (score / props.maxScore) * 90 + "%";
  return (
    <div className="Contestant">
      <div onClick={incrementScore}>
        <Persona {...props} />
      </div>
      <div style={style} onClick={!isEdit ? enterEdit : undefined}>
        {!isEdit ? (
          undefined
        ) : (
          <form onSubmit={setScoreOnSubmit}>
            <input name="score" type="number" ref={numberRef} />
          </form>
        )}
        <Scorebar {...props} score={score} width={width} />
      </div>
    </div>
  );
}

export default Contestant;
