/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Navbar from "./Bootstrap/Navbar.js";
const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday"
];
const WeatherAppConents = [{}, {}, {}, {}, {}, {}, {}];

const App = () => {
  return (
    <div classname="App">
      <Navbar className="Headers justify-content-center" dark={false}>
        Weather App
      </Navbar>
      <div class="list-group">
        {WeatherAppConents.map((cur, key) => (
          <a
            key={key}
            href="#"
            className={
              "list-group-item list-group-item-action" +
              ("today" === "day" ? "active" : " ")
            }
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>

              <small>3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
