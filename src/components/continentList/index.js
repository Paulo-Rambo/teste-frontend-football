import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCountryList } from "../../redux/dashboard/dashBoardSlice";

export default function ContinentsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.login);

  function setNewPage(continent) {
    console.log(country[continent]);
    dispatch(setCountryList(country[continent]));
    navigate("paises");
  }

  const locationList = [
    "Africa",
    "America",
    "Antarctica",
    "Arctic",
    "Asia",
    "Atlantic",
    "Australia",
    "Europe",
    "Indian",
    "Pacific",
  ];
  return (
    <div>
      <div>
        <h2>Selecione a localidade</h2>
      </div>
      <div>
        {locationList.map((name) => (
          <div onClick={() => setNewPage(name)}>{name}</div>
        ))}
      </div>
    </div>
  );
}
