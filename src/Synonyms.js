import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div className="synonyms">
              <span className="results-title">Synonym:</span>
              <ul>
                <li key={index} className="results-text">
                  {synonym}
                </li>
              </ul>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
