import React from "react";
import "./styles.css";
import { useState } from "react";

const DB = {
  Technology: [
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
  const [selectedGenre, setGenre] = useState("Technology");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <span>TED</span> Talks Recommendation
      </h1>
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
              background: "#D1D5DB",
              border: "1px solid black",
              borderRadius: "0.5rem",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textaline: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {DB[selectedGenre].map((talk) => (
            <li
              key={talk.name}
              style={{
                listStyle: "None",
                padding: "1rem",
                margin: "1rem 0rem",
                border: "1px solid #9CA3AF",
                borderRadius: "0.5rem",
                liststyle: "none",
                width: "70%"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {talk.name} </div>
              <div style={{ fontSize: "smaller" }}> {talk.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
