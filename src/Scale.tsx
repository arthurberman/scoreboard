import React from "react";

function Scale(props: { score: number }) {
  return (
    <div style={{ backgroundColor: "blue", height: "1000px" }}>
      {props.score}
    </div>
  );
}

export default Scale;
