import React, { useReducer, useState, useRef } from "react";
import "./App.css";
import Contestant from "./Contestant";

function reducer(state, action) {
  switch (action.type) {
    case "scoreChange":
      if (action.payload.score > state.highScore) {
        return { highScore: action.payload.score };
      }
      return state;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { highScore: 1 });
  const [contestants, setContestants] = useState([{ name: "Test" }]);
  const buttonRef = useRef(null);
  function addContestant() {
    setContestants(
      contestants.concat({
        name: buttonRef.current ? buttonRef.current.value : "No nmae"
      })
    );
  }
  return (
    <div className="App">
      <input ref={buttonRef} />
      <button onClick={addContestant}>+</button>
      {contestants.map(contestant => {
        return (
          <Contestant
            name={contestant.name}
            maxScore={state.highScore}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default App;
