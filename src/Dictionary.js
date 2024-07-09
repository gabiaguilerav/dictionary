import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentation https://api.dictionaryapi.dev/api/v2/entries/en/<word>
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter the word..."
          required
          autoFocus={true}
          onChange={handleKeywordChange}
          id="word-searcher"
        />
        <input type="submit" id="searcher" />
      </form>

      <Results results={results} />
    </div>
  );
}
