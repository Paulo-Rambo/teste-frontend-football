import TeamCard from "../teamCard";
import { ListTeamCardsStyle } from "./styles";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../redux/store";

export default function TeamsList() {
  const { filteredTeamsList } = useSelector((state: RootState) => state).teams;
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
