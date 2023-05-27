import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/login/loginSlice";
import { useNavigate } from "react-router";
import { HeaderStyle } from "./styles";
import { LogoutButton } from "../../styles/buttons";
import { toast } from "react-toastify";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/login");
    toast.success("Você saiu!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
  }

  return (
    <HeaderStyle>
      <div className="headerAlign">
        <div className="alignPosition1">
          <h2 className="alignPosition">API-Football</h2>
        </div>
        <div className="alignPosition1">
          <LogoutButton onClick={() => handleLogout()}>Logout</LogoutButton>
        </div>
      </div>
    </HeaderStyle>
  );
}
