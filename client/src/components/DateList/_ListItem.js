import React from "react";

const ListItem = ({ CurDate }) => {
  const today = new Date().getDate();
  return (
    <a
      href=""
      className={
        "list-group-item list-group-item-action " +
        (CurDate === today ? "active" : " ")
      }
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">May {CurDate}</h5>
        <small>{CurDate - today} </small>
      </div>
      <p className="mb-1">hi</p>
      <small>And some small print.</small>
    </a>
  );
};

export default ListItem;
