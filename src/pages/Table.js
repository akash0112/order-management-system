import React from "react";
import { useSelector } from "react-redux";

const Table = () => {

  const state = useSelector((state) => state);
  console.log(state);

  return <div className="container">Table</div>;
  
};

export default Table;
