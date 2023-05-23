import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/login/loginSlice";
import { useNavigate } from "react-router";
import { HeaderStyle } from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/login");
  }

  return (
    <HeaderStyle>
      <div className="alignPosition1">
        <div className="alignPosition">API-Football</div>
      </div>
      <div className="alignPosition1">
        <button className="logoutButton" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </HeaderStyle>
  );
}
