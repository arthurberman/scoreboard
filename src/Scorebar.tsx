import React, { CSSProperties } from "react";

interface ScoreBarProps {
  width: string;
  score?: number;
}

function Scorebar(props: ScoreBarProps) {
  const style: CSSProperties = {
    display: "flexbox",
    flexDirection: "column",
    flex: "9",
    marginTop: "3em",
    marginBottom: "3em",
    marginLeft: "1em",
    backgroundColor: "blue",
    width: props.width,
    paddingTop: "3em",
    paddingBottom: "3em",
    borderRadius: "0.4em",
    padding: "1em",
    transitionProperty: "width",
    transitionDuration: "0.5s",
    color: "white",
    borderStyle: "solid",
    borderColor: "black"
  };
  return <div style={style}>{props.score}</div>;
}
export default Scorebar;
