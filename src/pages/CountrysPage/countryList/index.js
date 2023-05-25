import CountryCard from "../countryCard";
import { ListCards } from "./styles";

export default function CountryList(props) {
  const items = props?.list;

  return (
    <ListCards>
      <div className="sectionRow">
        {items.map((item, index) => (
          <CountryCard key={index} country={item} />
        ))}
      </div>
    </ListCards>
  );
}
