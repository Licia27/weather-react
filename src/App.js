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
          <a
            href="https://vercel.com/new/licia27s-projects/success?developer-id=&external-id=&redirect-url=&branch=master&deploymentUrl=weather-react-hx4b1cz8t-licia27s-projects.vercel.app&projectName=weather-react&s=https%3A%2F%2Fgithub.com%2FLicia27%2Fweather-react&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1&slug=app-future&slug=en-US&slug=new&slug=licia27s-projects&slug=success"
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
