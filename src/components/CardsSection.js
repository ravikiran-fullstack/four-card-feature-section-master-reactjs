import React from "react";

import Card from "./Card";

const data = [
  {
    cardTitle: "SuperVisor",
    description: "Monitor activity to identify project roadblocks",
    icon: "./icons/icon-supervisor.svg",
  },
  {
    cardTitle: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: "./icons/icon-team-builder.svg",
  },
  {
    cardTitle: "Karma",
    description: "Regularly evaluate our talent to ensure quality",
    icon: "./icons/icon-karma.svg",
  },
  {
    cardTitle: "Calculator",
    description: "Uses data from projects to provide better delivery estimates",
    icon: "./icons/icon-calculator.svg",
  },
];

const CardsSection = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-12 cardOne">
        <Card cardInfo={data[0]}></Card>
      </div>
      <div className="col-md-4 col-sm-12 cardTeamKarma">
        <Card cardInfo={data[1]}></Card>
        <Card cardInfo={data[2]}></Card>
      </div>
      <div className="col-md-4 col-sm-12 cardFour">
        <Card cardInfo={data[3]}></Card>
      </div>
    </div>
  );
};

export default CardsSection;
