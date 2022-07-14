import React from "react";
import "./trainings.css";
import Card from "../card/Card";
import { cardData } from "../../data/card_data/cardData";

function Trainings() {
  return (
    <div className="trainings-container container">
      <h1>Our Trainings</h1>
      <div className="card-container">
        {cardData.map((data) => {
            return <Card logo={data.logo} title={data.title} date={data.date} color={data.color} />
        })}
      </div>
    </div>
  );
}

export default Trainings;
