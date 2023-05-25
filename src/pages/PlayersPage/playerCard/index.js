import { PlayerCardStyle } from "./styles";

export default function PlayerCard(props) {
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
