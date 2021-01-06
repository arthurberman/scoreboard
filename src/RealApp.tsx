import React, { useReducer, useState } from "react";
import "./App.css";
import GamePane from "./GamePane";
import Logo from "./Logo";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "scoreChange":
      if (action.payload.score > state.highScore) {
        window.localStorage.setItem("highScore", action.payload.score);
        return { highScore: action.payload.score };
      }
      return state;
    default:
      return state;
  }
}

export const DispatchContext = React.createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
} | null>(null);

function RealApp() {
  const previousHighScore = window.localStorage.getItem("highScore") || 1;
  const [state, dispatch] = useReducer(reducer, {
    highScore: previousHighScore
  });

  const [shouldShowEntry, setShouldShowEntry] = useState<boolean>(false);

  function Reset() {
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="App">
      <DispatchContext.Provider value={{ state, dispatch }}>
        <GamePane shouldShowEntry={shouldShowEntry} />
      </DispatchContext.Provider>
      <br />
      <br />
      <button onClick={Reset}> Reset </button>
      <button
        onClick={() => {
          setShouldShowEntry(!shouldShowEntry);
        }}
      >
        Show Entry Field
      </button>
    </div>
  );
}

export default RealApp;
