import React, { useState } from "react";

const style: React.CSSProperties = {
  width: "10em",
  height: "10em",
  borderRadius: "20%",
  borderColor: "black",
  borderStyle: "solid"
};

export interface PersonaPicProps {
  name: string;
  restorationKey?: string;
}

function PersonaPic(props: PersonaPicProps) {
  let pictureKey = "logo512.png";
  if (props.restorationKey) {
    pictureKey =
      window.localStorage.getItem(props.restorationKey + "PersonaPicKey") ||
      pictureKey;
  }
  const [picture, setPicture] = useState<string | null>(pictureKey);

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
                setPicture(reader.result as string);
                if (props.restorationKey) {
                  window.localStorage.setItem(
                    props.restorationKey + "PersonaPicKey",
                    reader.result as string
                  );
                }
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

  return (
    <img
      src={picture as string}
      style={style}
      alt={props.name}
      onDrop={onDrop}
      onDragOver={dragHandler}
      onDragEnter={dragHandler}
    />
  );
}

export default PersonaPic;
