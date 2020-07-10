import React, { useState } from "react";

const style: React.CSSProperties = {
  width: "10em",
  height: "10em",
  borderRadius: "20%",
  backgroundColor: "red"
};

export interface PersonaPicProps {
  name: string;
}

function PersonaPic(props: PersonaPicProps) {
  const [picture, setPicture] = useState<string | ArrayBuffer | null>(null);

  function onDrop(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === "file") {
          const file = event.dataTransfer.items[i].getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener(
              "load",
              function() {
                // convert image file to base64 string
                setPicture(reader.result);
              },
              false
            );
          }
        }
      }
    }
  }
  function dragHandler(event: React.DragEvent) {
    event.preventDefault();
  }

  if (picture) {
    return <img src={picture as string} style={style} alt={props.name} />;
  }

  return (
    <div
      style={style}
      onDrop={onDrop}
      onDragOver={dragHandler}
      onDragEnter={dragHandler}
    />
  );
}

export default PersonaPic;
