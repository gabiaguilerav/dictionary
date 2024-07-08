import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary app</h1>

        <h2>
          We can help you finding the meaning of a word{" "}
          <span className="material-symbols-outlined">captive_portal</span>
        </h2>

        <Dictionary />

        <Footer />
      </div>
    </div>
  );
}
