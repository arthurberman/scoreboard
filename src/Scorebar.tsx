import React, { CSSProperties } from "react";

interface ScoreBarProps {
  width: string;
  score?: number;
}

function Scorebar(props: ScoreBarProps) {
  const style: CSSProperties = {
    display: "flexbox",
    marginTop: "3em",
    marginBottom: "3em",
    marginLeft: "1em",
    backgroundColor: "red",
    width: props.width,
    paddingTop: "3em",
    paddingBottom: "3em",
    borderRadius: "0.4em",
    padding: "1em",
    transitionProperty: "width",
    transitionDuration: "0.5s",
    color: "white"
  };
  return <div style={style}>{props.score}</div>;
}
export default Scorebar;
