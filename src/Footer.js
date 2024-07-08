import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by{" "}
      <a
        href="https://github.com/gabiaguilerav"
        target={"_blank"}
        rel="noreferrer"
      >
        Gabriela Aguilera
      </a>
      . Open-sourced on{" "}
      <a
        href="https://github.com/gabiaguilerav/dictionary.git"
        target={"_blank"}
        rel="noreferrer"
      >
        Github
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://gabriela-dictionary.netlify.app/"
        target={"_blank"}
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
