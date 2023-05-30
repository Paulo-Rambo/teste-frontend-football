import CountryCard from "../countryCard";
import { ListCards } from "./styles";
import { ICountry } from "../../../redux/dashboard/dashBoardSlice";

interface IProps {
  list: ICountry[];
}

export default function CountryList(props: IProps) {
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
