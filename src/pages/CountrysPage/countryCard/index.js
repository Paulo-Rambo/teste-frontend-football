import { Card } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  requestSeasons,
  setTeamName,
} from "../../../redux/dashboard/dashBoardSlice";

export default function CountryCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSelectCard(name) {
    dispatch(setTeamName(name));
    dispatch(requestSeasons());
    navigate("seasons");
  }

  return (
    <Card onClick={() => handleSelectCard(props.country.name)}>
      <div className="nameDiv">
        <div>{props.country.name}</div>
        <div>{props.country.code}</div>
      </div>
      <div className="imgBox">
        <img alt={props.country.name} src={props.country.flag} />
      </div>
    </Card>
  );
}
