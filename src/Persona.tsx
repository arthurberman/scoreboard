import React from "react";
import "./Persona.css";

interface PersonaProps {
  name: string;
}

function Persona(props: PersonaProps) {
  return (
    <div className="Persona">
      <div
        style={{
          width: "10em",
          height: "10em",
          borderRadius: "20%",
          backgroundColor: "red"
        }}
      />
      <h1>{props.name}</h1>
    </div>
  );
}

export default Persona;
