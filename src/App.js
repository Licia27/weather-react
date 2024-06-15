import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Randburg" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/89174-andile-ndlovu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andile Ndlovu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Licia27/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
            
          <a href="https://weather-react-69vo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
