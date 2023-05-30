import { Card } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { requestSeasons } from "../../../redux/season/seasonsSlice";
import { setTeamName } from "../../../redux/dashboard/dashBoardSlice";
import { AppDispatch } from "../../../redux/store";
import { ICountry } from "../../../redux/dashboard/dashBoardSlice";

interface ICountryProps {
  country: ICountry;
}

export default function CountryCard(props: ICountryProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  function handleSelectCard(name: string) {
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
