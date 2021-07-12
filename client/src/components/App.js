/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Navbar from "./Bootstrap/Navbar";
import { WeatherAppContents } from "../constants/Dates";
import List from "./DateList/List";

const App = () => {
  return (
    <div classname="App">
      <Navbar className="Headers justify-content-center" dark={false}>
        Weather App
      </Navbar>

      <div className="Container mt-4 ">
        <div className="row ">
          <div className="col-4 ">
            <List WeatherAppContents={WeatherAppContents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
