import { useNavigate } from "react-router";
import { SesionDivStyle } from "./styles";
import { useDispatch } from "react-redux";
import { requestLeagues } from "../../redux/dashboard/dashBoardSlice";

export default function SeasonList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSelectSeson(item) {
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
