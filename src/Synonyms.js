import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="synonyms">
              <span>Synonyms:</span>
              <li key={index}>{synonym}</li>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
