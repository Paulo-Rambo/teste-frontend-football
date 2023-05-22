import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCountryList } from "../../redux/dashboard/dashBoardSlice";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { actionLogin } from "../../redux/login/loginSlice";

export default function ContinentsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country, authStatus } = useSelector((state) => state.login);

  function loginAction() {
    const client_token = Cookies.get("api_sports_key");
    if (!client_token) {
      navigate("/login");
    } else {
      dispatch(actionLogin({ key: client_token }));
    }
    return;
  }

  function setNewPage(continent) {
    if (!country) {
      loginAction();
    }
    console.log(continent);
    dispatch(setCountryList(country[continent]));
    navigate("/paises");
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
