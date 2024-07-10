import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="second-section">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong className="results-title">Definition:</strong>{" "}
                <span className="results-text">{definition.definition}</span>
              </p>
              <em>
                <p className="results-example">{definition.example}</p>
              </em>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
