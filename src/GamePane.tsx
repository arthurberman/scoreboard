import React, { useState, MutableRefObject, useRef, useContext } from "react";
import Contestant from "./Contestant";
import { DispatchContext } from "./RealApp";

function GamePane() {
  const [contestants, setContestants] = useState([{ name: "Test" }]);
  const buttonRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  function addContestant(event: React.FormEvent) {
    event.preventDefault();
    setContestants(
      contestants.concat({
        name:
          buttonRef && buttonRef.current ? buttonRef.current.value : "No nmae"
      })
    );
  }
  const context = useContext(DispatchContext);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flexGrow: 10 }}>
        {contestants.map(contestant => {
          return (
            <Contestant
              name={contestant.name}
              maxScore={context && context.state.highScore}
              key={contestant.name}
            />
          );
        })}
      </div>
      <form onSubmit={addContestant}>
        <input ref={buttonRef} />
        <button onClick={addContestant}>+</button>
      </form>
    </div>
  );
}

export default GamePane;
