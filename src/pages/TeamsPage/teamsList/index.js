import TeamCard from "../teamCard";
import { ListTeamCardsStyle } from "./styles";
import { useSelector } from "react-redux";
import React from "react";

export default function TeamsList() {
  const { filteredTeamsList } = useSelector((state) => state).dashboard;
  const items = filteredTeamsList;

  return (
    <ListTeamCardsStyle>
      <div className="sectionRow">
        {items.map((item, index) => (
          <TeamCard key={item.team.id} team={item.team} />
        ))}
      </div>
    </ListTeamCardsStyle>
  );
}
