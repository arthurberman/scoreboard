import React, { useReducer } from "react";
import "./App.css";
import GamePane from "./GamePane";

function reducer(state: any, action: any) {
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

export const DispatchContext = React.createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
} | null>(null);

function RealApp() {
  const [state, dispatch] = useReducer(reducer, { highScore: 1 });

  return (
    <div className="App">
      <DispatchContext.Provider value={{ state, dispatch }}>
        <GamePane />
      </DispatchContext.Provider>
    </div>
  );
}

export default RealApp;
