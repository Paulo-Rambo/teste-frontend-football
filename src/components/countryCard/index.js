import { Card } from "./styles";

export default function CountryCard(props) {
  return (
    <Card>
      <div className="nameDiv">
        <div>{props.country.name}</div>
        <div>{props.country.code}</div>
      </div>
      <div className="imgBox">
        <img src={props.country.flag} />
      </div>
    </Card>
  );
}
