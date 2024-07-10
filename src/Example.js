import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <ul>
        {props.example.map(function (example, index) {
          return (
            <div className="example">
              <span>Example:</span>
              <ul>
                <em>
                  <li key={index}>{example}</li>
                </em>
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
