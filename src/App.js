import React from "react";
import "./styles.css";
import { useState } from "react";

const DB = {
  technology: [
    {
      name: "The thrilling potential of SixthSense technology",
      rating: "4.5"
    },
    {
      name: "Underwater astonishments",
      rating: "5"
    }
  ],
  Entertainment: [
    {
      name: "Your elusive creative genius",
      rating: "4.5"
    },
    {
      name: "If I should have a daughter",
      rating: "4"
    }
  ],
  Global_issues: [
    {
      name: "The next outbreak We are not ready",
      rating: "4.5/5"
    },
    {
      name: "Are we in control of our own decisions",
      rating: "4/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("technology");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>TED Talks Recommendation</h1>
      <p style={{ fontsize: "smaller" }}>
        {" "}
        Check out my favourite talks. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(DB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "1rem",
              fontsize: "larger"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textaline: "left" }}>
        <ul>
          {" "}
          {DB[selectedGenre].map((talk) => (
            <li style={{ listStyle: "None" }}>
              <div style={{ fontSize: "larger" }}> {talk.name} </div>
              <div style={{ fontSize: "smaller" }}> {talk.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
