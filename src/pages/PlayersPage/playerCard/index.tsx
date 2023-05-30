import { PlayerCardStyle } from "./styles";
import { IPlayerData } from "../../../redux/players/playersSlice";

interface IProps {
  obj: IPlayerData;
}

export default function PlayerCard(props: IProps) {
  return (
    <PlayerCardStyle>
      <div className="teamDetails">
        <div className="imgBox">
          <img alt={props.obj.name} src={props.obj.photo} />
        </div>
        <div className="nameDiv">
          <div>Nome: {props.obj.name}</div>
          <div>Idade: {props.obj.age}</div>
          <div>Nacionalidade: {props.obj.nationality}</div>
        </div>
      </div>
    </PlayerCardStyle>
  );
}
