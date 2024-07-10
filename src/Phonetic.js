import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <span>{props.phonetic.text}</span>

      <a href="{props.phonetic.audio}" target={"_blank"} rel="noreferrer">
        Listen here
      </a>
    </div>
  );
}
