import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="row galery-pics">
              <div className="col" key={index}>
                <img
                  src={photo.src.medium}
                  alt={""}
                  className="img-fluid picture"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
