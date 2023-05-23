import CountryCard from "../countryCard";
import { ListCards } from "./styles";

export default function CountryList(props) {
  const items = props?.list;
  const itemsPerRow = 5;
  const rows = Array.from(
    { length: Math.ceil(items.length / itemsPerRow) },
    (v, i) => items.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow)
  );
  return (
    <ListCards>
      {rows.map((row, rowIndex) => (
        <div className="sectionRow" key={rowIndex}>
          {row.map((item, index) => (
            <CountryCard key={index} country={item} />
          ))}
        </div>
      ))}
    </ListCards>
  );
}
