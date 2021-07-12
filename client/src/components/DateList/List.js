import React from "react";
//import { WeatherAppContents } from "../constants/Dates";
import ListItem from "./_ListItem";

const List = ({ WeatherAppContents }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        <ListItem CurDate={cur.Date} key={key} />
      ))}
    </div>
  );
};
export default List;
