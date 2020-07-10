import React from "react";
import "./Persona.css";
import PersonaPic from "./PersonaPic";

interface PersonaProps {
  name: string;
}

function Persona(props: PersonaProps) {
  return (
    <div className="Persona">
      <PersonaPic name={props.name} />
      <h1>{props.name}</h1>
    </div>
  );
}

export default Persona;
