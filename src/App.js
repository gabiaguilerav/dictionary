import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary app</h1>
        <h2>
          We can help you finding a word{" "}
          <span className="material-symbols-outlined">captive_portal</span>
        </h2>

        <Dictionary />

        <footer>
          Coded by Gabriela Aguilera. Open-sourced on Github and hosted on
          Netlify
        </footer>
      </div>
    </div>
  );
}
