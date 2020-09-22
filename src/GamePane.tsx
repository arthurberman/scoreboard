import React, { useState, MutableRefObject, useRef, useContext } from "react";
import Contestant from "./Contestant";
import { DispatchContext } from "./RealApp";

function GamePane(props: { shouldShowEntry: boolean }) {
  const previousContestants = JSON.parse(
    window.localStorage.getItem("contestants") || "[]"
  );
  const [contestants, setContestants] = useState<{ name: string }[]>(
    previousContestants
  );
  const { shouldShowEntry } = props;
  const buttonRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  function addContestant(event: React.FormEvent) {
    event.preventDefault();
    const newContestants = contestants.concat({
      name: buttonRef && buttonRef.current ? buttonRef.current.value : "No name"
    });
    window.localStorage.setItem("contestants", JSON.stringify(newContestants));
    setContestants(newContestants);
  }
  const context = useContext(DispatchContext);
  return (
    <div style={{ margin: "2em", display: "flex", flexDirection: "row" }}>
      <div style={{ flexGrow: 10 }}>
        {contestants.map((contestant: { name: string }) => {
          return (
            <Contestant
              name={contestant.name}
              maxScore={context && context.state.highScore}
              key={contestant.name}
              restorationKey={contestant.name}
            />
          );
        })}
      </div>
      {shouldShowEntry ? (
        <form onSubmit={addContestant}>
          <input ref={buttonRef} />
          <button onClick={addContestant}>+</button>
        </form>
      ) : (
        undefined
      )}
    </div>
  );
}

export default GamePane;
