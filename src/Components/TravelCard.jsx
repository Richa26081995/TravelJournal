import React from "react";
import CardStructure from "./CardStructure";
import data from "../data.js";

const TravelCard = () => {
  return (
    <>
      {data.map((entry) => {
        return <CardStructure entry={entry} key={entry.id} />;
      })}
    </>
  );
};

export default TravelCard;
