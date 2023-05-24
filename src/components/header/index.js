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
      <div className="headerAlign">
        <div className="alignPosition1">
          <h2 className="alignPosition">API-Football</h2>
        </div>
        <div className="alignPosition1">
          <button className="logoutButton" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
}
