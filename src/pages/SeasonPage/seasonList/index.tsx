import { useNavigate } from "react-router";
import { SesionDivStyle } from "./styles";
import { useDispatch } from "react-redux";
import { requestLeagues } from "../../../redux/leagues/leaguesSlice";
import { AppDispatch } from "../../../redux/store";

interface IProps {
  list: number[];
}

export default function SeasonList(props: IProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  function handleSelectSeson(item: number) {
    const itemStr = `${item}`;
    dispatch(requestLeagues(itemStr));
    console.log(itemStr);
    navigate("/dashboard/leagues");
  }
  return (
    <SesionDivStyle>
      {props.list.map((item) => (
        <div onClick={() => handleSelectSeson(item)} className="yearDiv">
          {item}
        </div>
      ))}
    </SesionDivStyle>
  );
}
