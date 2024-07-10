import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <span className="phonetics-text">{props.phonetic.text}</span>
      <a
        href="{props.phonetic.audio}"
        target={"_blank"}
        rel="noreferrer"
        className="phonetics-audio"
      >
        Listen here
      </a>
    </div>
  );
}
